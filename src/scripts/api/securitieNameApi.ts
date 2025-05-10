import { SECURITIES_NAMES } from "../../constants/apiUrls";

export interface Security {
  SECID: string;
  SHORTNAME: string;
}

export async function fetchTickers(): Promise<Security[]> {
  try {
    const response = await fetch(SECURITIES_NAMES);
    const data = await response.json();
    return data[1].securities as Security[];
  } catch (error) {
    console.error('Ошибка при загрузке тикеров:', error);
  }
}