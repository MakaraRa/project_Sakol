
export interface University {
  id: number
  name: string
  slug: string
  location: string
  type: 'Public' | 'Private'
  description: string
  logo?: string
}

export interface Major {
  id: number
  name: string
  category: string
  description: string
  careers: string[]  // a major can have multiple career options
  icon?: string
}

export interface Scholarship {
  id: number
  name: string
  provider: string
  description: string
  deadline?: string
}
