export type User = {
  id: number
  fullName: string
  createdAt: string
  updatedAt: string
  isSuperAdmin: boolean
  account: {
    id: number
    createdAt: string
    email: string
    provider: 'LOCAL'
    updatedAt: string
  }
}
