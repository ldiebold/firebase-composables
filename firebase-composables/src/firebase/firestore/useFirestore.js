import { onSnapshot } from 'firebase/firestore'
import { tryOnScopeDispose, isDefined } from '@vueuse/core'
import { ref } from 'vue-demi'

function isDocumentReference (docRef) {
  return (docRef.path?.match(/\//g) || []).length % 2 !== 0
}

function getData (docRef) {
  const data = docRef.data()

  if (data) {
    Object.defineProperty(data, 'id', {
      value: docRef.id.toString(),
      writable: false
    })
  }

  return data
}

export function useFirestore (
  docRef,
  initialValue = undefined,
  options = {}
) {
  const {
    errorHandler = (err) => console.log(err),
    authDispose = true
  } = options

  if (isDocumentReference(docRef)) {
    const data = ref(initialValue)
    const close = onSnapshot(docRef, (snapshot) => {
      data.value = getData(snapshot) || null
    }, errorHandler)

    tryOnScopeDispose(() => {
      close()
    })

    return data
  } else {
    const data = ref(initialValue)

    const close = onSnapshot(docRef, (snapshot) => {
      data.value = snapshot.docs.map(getData).filter(isDefined)
    }, errorHandler)

    if (authDispose) {
      tryOnScopeDispose(() => {
        close()
      })
    }

    return data
  }
}
