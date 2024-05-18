import { atomWithStorage } from 'jotai/utils'
import { store } from './store.state'
import { removeQuotes } from '@utils'

const LocalKeyToken = 'token' as const

const tokenAtom = atomWithStorage<null | string>(
  'token',
  localStorage.getItem(LocalKeyToken) || null,
)

export const token = {
  get: () => {
    const t = store.get(tokenAtom)
    return t ? removeQuotes(t) : null
  },
  set: (newValue: string | null) => {
    if (newValue === null) {
      store.set(tokenAtom, () => null)
      localStorage.removeItem(LocalKeyToken)
    } else {
      store.set(tokenAtom, () => newValue)
    }
  },
}
