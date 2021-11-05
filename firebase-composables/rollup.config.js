// import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/main.ts',
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
    nodeResolve({
      resolveOnly: [/^(?!firebase).*/],
      modulesOnly: true,
      dedupe: [
        'firebase',
        'firebase/auth',
        'firebase/app',
        'firebase/firestore'
      ]
    }),
    typescript()
  ]
}
