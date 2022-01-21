import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
    input: './src/index.ts',
    output: [{
        file: pkg.module,
        format: 'esm',
        sourcemap: true
    }, {
        file: pkg.main,
        format: 'umd',
        name: 'window',
        sourcemap: true,
        extend: true
    }],
    plugins: [
        resolve(),
        typescript(),
        terser()
    ]
}
