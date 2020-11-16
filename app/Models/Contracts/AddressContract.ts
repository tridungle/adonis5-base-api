export interface AddressContract {
  id: number
  cityId: number
  userId: number
  zipCode: string
  place: string
  number: string
  neighborhood: string
  complement?: string
  isDefault: boolean
}
