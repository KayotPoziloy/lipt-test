import { SECURITIES_NAMES } from '../../constants/apiUrls'
import type { SecurityItem } from '../../types/stock'

export async function fetchTickers(): Promise<SecurityItem[]> {
  const response = await fetch(SECURITIES_NAMES)
  const data = await response.json()

  return data[1]?.securities as SecurityItem[]
}
