import { getFirestore } from 'firebase/firestore'
import useApp from '../useApp'

export default () => {
  const app = useApp()
  return getFirestore(app)
}
