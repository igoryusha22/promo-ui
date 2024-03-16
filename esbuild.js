import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

esbuild
  .build({
    entryPoints: ['./src/**/index.ts', './src/**/index.tsx'],
    outdir: 'dist',
    bundle: true,
    treeShaking: true,
    format: 'esm',
    splitting: true,
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
