import {dirname} from 'path'
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import {config} from './config.js'
import {collect_content} from './integrations/integration-content-structure.js'
import { markdown_render } from 'astro-markdown-render/integration.js'

const rootdir = dirname(fileURLToPath(import.meta.url));
globalThis.rootdir = rootdir
config.rootdir = rootdir
config.collect_content.rootdir = rootdir
config.markdown_render.rootdir = rootdir

export default defineConfig({
  outDir: config.outDir,
  output: config.output,
  integrations: [
    collect_content(config.collect_content),
    markdown_render(config.markdown_render)
  ]
});
