// source.config.ts
import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
var docs = defineCollections({
  type: "doc",
  dir: "content/docs",
  schema: frontmatterSchema
  // zod schema to validate frontmatter
});
var meta = defineCollections({
  type: "meta",
  dir: "content/docs",
  schema: metaSchema
  // zod schema to validate JSON data
});
var source_config_default = defineConfig({
  //@ts-ignore
  collections: {
    docs,
    meta
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
