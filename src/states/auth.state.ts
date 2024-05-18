import { atomWithStorage } from 'jotai/utils'
import { store } from './store.state'
import { removeQuotes } from '@utils'

const tokenAtom = atomWithStorage<null | string>(
  'token',
  localStorage.getItem('token') || null,
)

export const token = {
  get: () => {
    const t = store.get(tokenAtom)
    return t ? removeQuotes(t) : null
  },
  set: (newValue: string | null) => store.set(tokenAtom, () => newValue),
}
