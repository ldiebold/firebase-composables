// import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/main.js',
  external: [
    'firebase',
    'firebase/auth',
    'vue-demi',
    'vue',
    'vue-router',
    'firebase/app',
    'firebase/firestore',
    '@vueuse/core'
  ],

  output: [
    {
      file: './dist/firebase-composables.esm.js',
      format: 'esm'
    }
    // {
    //   file: './dist/firebase-composables.cjs.js',
    //   format: 'cjs'
    // }
  ],
  plugins: [
    // typescript(),
    nodeResolve({
      resolveOnly: [/^(?!firebase).*/],
      modulesOnly: true,
      dedupe: [
        'firebase',
        'firebase/auth',
        'firebase/app',
        'firebase/firestore'
      ]
    })
    // commonjs({
    //   include: 'node_modules/**'
    // })
    // babel({
    //     babelHelpers: 'bundled',
    //     exclude: 'node_modules/**',
    //     // extensions: ['.ts'],
    //     extensions: ['.js'],
    //     presets: ['@babel/preset-env'],
    //     plugins: [
    //         // ['@babel/plugin-proposal-decorators', { legacy: true }],
    //         // '@babel/plugin-proposal-function-sent',
    //         // '@babel/plugin-proposal-export-namespace-from',
    //         // '@babel/plugin-proposal-numeric-separator',
    //         // '@babel/plugin-proposal-throw-expressions',
    //         // '@babel/plugin-transform-object-assign',
    //     ],
    // }),
  ]
}
