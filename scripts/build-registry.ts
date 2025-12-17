import { registry } from "../registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "@/registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

type File = z.infer<typeof registryItemFileSchema>;

async function writeFileRecursive(filePath: string, data: string) {
    const dir = path.dirname(filePath);

    try {
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(filePath, data, "utf-8");
        console.log(`File written to ${filePath}`);
    } catch (error) {
        console.error(`Error writing file ${filePath}`);
        console.error(error);
    }
}

// Helper function to remove file extension
const removeExtension = (filename: string): string => {
    return filename.replace(/\.(tsx?|jsx?|css|json)$/, '');
};

const getComponentFiles = async (files: File[], registryType: string) => {
    const filesArrayPromises = (files ?? []).map(async (file) => {
        if (typeof file === "string") {
            const normalizedPath = file.startsWith("/") ? file : `/${file}`;
            const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
            const fileContent = await fs.readFile(filePath, "utf-8");
            
            // Remove extension from filename
            const fileName = normalizedPath.split('/').pop() || '';
            const fileNameWithoutExt = removeExtension(fileName);
            
            // Remove extension from path
            const pathWithoutExt = removeExtension(normalizedPath);
            
            return {
                type: registryType,
                content: fileContent,
                path: pathWithoutExt,
                target: `components/apexUi/${fileNameWithoutExt}`,
            };
        }
        
        const normalizedPath = file.path.startsWith("/")
            ? file.path
            : `/${file.path}`;
        const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
        const fileContent = await fs.readFile(filePath, "utf-8");
        
        // Remove extension from filename
        const fileName = normalizedPath.split('/').pop() || '';
        const fileNameWithoutExt = removeExtension(fileName);
        
        // Remove extension from path
        const pathWithoutExt = removeExtension(normalizedPath);
        
        const getTargetPath = (type: string) => {
            switch (type) {
                case "registry:hook":
                    return `hooks/${fileNameWithoutExt}`;
                case "registry:lib":
                    return `lib/${fileNameWithoutExt}`;
                case "registry:block":
                    return `blocks/${fileNameWithoutExt}`;
                default:
                    return `components/apexUi/${fileNameWithoutExt}`;
            }
        };
        
        const fileType = typeof file === 'string' ? registryType : (file.type || registryType);
        
        return {
            type: fileType,
            content: fileContent,
            path: pathWithoutExt,
            target: typeof file === 'string' ? getTargetPath(registryType) : (file.target || getTargetPath(fileType)),
        };
    });

    const filesArray = await Promise.all(filesArrayPromises);
    return filesArray;
};

const main = async () => {
    for (let i = 0; i < registry.length; i++) {
        const component = registry[i];
        const files = component.files;
        if (!files) throw new Error("No files found for component");

        const filesArray = await getComponentFiles(files, component.type);

        const json = JSON.stringify(
            {
                ...component,
                files: filesArray,
            },
            null,
            2
        );
        const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
        await writeFileRecursive(jsonPath, json);
        console.log(json);
    }
};

main()
    .then(() => {
        console.log("done");
    })
    .catch((err) => {
        console.error(err);
    });
