import { inject } from 'vue-demi'
import { FirebaseAppKey } from './types/symbols'

export default function () {
  return inject(FirebaseAppKey)
}
