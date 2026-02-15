import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import fs from 'fs';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const dropdownContent = fs.readFileSync(path.resolve(__dirname, 'src/components/dropdown.js'), 'utf-8');
const replace_options = { preventAssignment: true, "// ./components/dropdown.js": dropdownContent }
const replace_options_umd = { preventAssignment: true, "export function init_dropdown() {\n// ./components/dropdown.js\n}": "" }

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'thselector',
        sourcemap: true,
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace(replace_options),
    ].filter(Boolean),
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.min.js',
        format: 'umd',
        name: 'thselector',
        sourcemap: true,
        plugins: [isProduction && terser()],
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace(replace_options_umd),
    ].filter(Boolean),
  },
  {
    input: 'src/components/dropdown.js',
    output: [
      {
        file: 'dist/dropdown.min.js',
        format: 'umd',
        name: 'thselector',
        sourcemap: true,
        plugins: [isProduction && terser()],
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
    ].filter(Boolean)
  }
];
