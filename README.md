# Apex UI - *An Open Source Components Library for Modern Applications*

![Apex UI Banner](./path-to-your-screenshot.png)

## Installation

Getting started with Apex UI

### 1. Install utilities

All components use Tailwind CSS v4 and shadcn/ui, so ensure it's installed in your project. Many components also use the `cn` utility function—install it with the following command if you don't have it:

<table>
<tr>
<td width="60px" align="center">bun</td>
<td width="60px" align="center">npx</td>
<td width="60px" align="center">pnpm</td>
</tr>
</table>

```bash
bunx shadcn@latest add https://apexui-kappa.vercel.app/r/utils.json
```

```bash
npx shadcn@latest add https://apexui-kappa.vercel.app/r/utils.json
```

```bash
pnpm dlx shadcn@latest add https://apexui-kappa.vercel.app/r/utils.json
```

### 2. That's it 🎉

We use lucide-icons for most components that include icons, along with some shadcn/ui components. These dependencies will be automatically installed when using the CLI.

For example to add `card-05` to your project, it will be easy as:

<table>
<tr>
<td width="60px" align="center">bun</td>
<td width="60px" align="center">npx</td>
<td width="60px" align="center">pnpm</td>
</tr>
</table>

```bash
bunx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json
```

```bash
npx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json
```

```bash
pnpm dlx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json
```

*While we provide a convenient 'copy' button for the code, we strongly recommend using the CLI for installing components, as it ensures all necessary files are included.*

Add to your page and it works!

```jsx
import Card05 from "@/components/apexUi/card-05";

export default function Page() {
  return <Card05 />;
}
```

### 3. Blocks

Blocks are a set of components to make a complete blocks, they contain multiples files. To install them it is mandatory to use the `cli`. For example it you'd like to install `ai-card-generation` block:

<table>
<tr>
<td width="60px" align="center">bun</td>
<td width="60px" align="center">npx</td>
<td width="60px" align="center">pnpm</td>
</tr>
</table>

```bash
bunx shadcn@latest add https://apexui-kappa.vercel.app/r/ai-card-generation.json
```

```bash
npx shadcn@latest add https://apexui-kappa.vercel.app/r/ai-card-generation.json
```

```bash
pnpm dlx shadcn@latest add https://apexui-kappa.vercel.app/r/ai-card-generation.json
```

Then, add to your page and it works!

```jsx
/**
 * AICardGeneration require 5 additional components
 * that will be automatically installed with the CLI.
 */
import AICardGeneration from "@/components/apexUi/AICardGeneration";

export default function Page() {
  return <AICardGeneration />;
}
```

### 4. Optional dependencies

Some components require additional libraries, listed at the bottom of each components. Make sure to install them to ensure the component works properly.

### 5. Monorepo

For monorepo `shadcn/ui` CLI contain the options `-c` to the path to your workspace for example:

<table>
<tr>
<td width="60px" align="center">bun</td>
<td width="60px" align="center">npx</td>
<td width="60px" align="center">pnpm</td>
</tr>
</table>

```bash
bunx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json -c ./apps/www
```

```bash
npx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json -c ./apps/www
```

```bash
pnpm dlx shadcn@latest add https://apexui-kappa.vercel.app/r/card-05.json -c ./apps/www
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this in your projects!

## Support

If you find this library helpful, please consider giving it a ⭐️ on GitHub!
