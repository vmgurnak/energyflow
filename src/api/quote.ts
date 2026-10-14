import { Quote } from '@/types/quote';

export const fetchQuote = async (): Promise<Quote> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote`);

  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }

  return response.json();
};
