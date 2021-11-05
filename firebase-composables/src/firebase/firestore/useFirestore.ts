import { onSnapshot, DocumentReference } from 'firebase/firestore'
import { tryOnScopeDispose, isDefined } from '@vueuse/core'
import { ref } from 'vue-demi'

export interface FirestoreOptions {
  errorHandler?: (err: Error) => void
  autoDispose?: boolean
}

function isDocumentReference(docRef) {
  return (docRef.path?.match(/\//g) || []).length % 2 !== 0
}

function getData(docRef) {
  const data = docRef.data()

  if (data) {
    Object.defineProperty(data, 'id', {
      value: docRef.id.toString(),
      writable: false
    })
  }

  return data
}

export function useFirestore(
  docRef: DocumentReference,
  initialValue = undefined,
  options: FirestoreOptions = {}
) {
  const {
    errorHandler = (err) => console.log(err),
    autoDispose = true
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

    if (autoDispose) {
      tryOnScopeDispose(() => {
        close()
      })
    }

    return data
  }
}
