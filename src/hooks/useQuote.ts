import { useEffect, useState } from 'react';

import { fetchQuote } from '@/api/quote';
import type { StoredQuote } from '@/types/quote';

const QUOTE_LS_KEY = 'energy-flow-quote';

export const useQuote = () => {
  const [quote, setQuote] = useState<StoredQuote | null>(null);

  useEffect(() => {
    const getQuote = async () => {
      const today = new Date().toISOString().slice(0, 10);

      const savedQuote = localStorage.getItem(QUOTE_LS_KEY);

      if (savedQuote) {
        try {
          const parsedQuote: StoredQuote = JSON.parse(savedQuote);

          if (parsedQuote.date === today) {
            setQuote(parsedQuote);
            return;
          }
        } catch {
          localStorage.removeItem(QUOTE_LS_KEY);
        }
      }

      try {
        const data = await fetchQuote();

        const quoteToSave: StoredQuote = {
          ...data,
          date: today,
        };

        localStorage.setItem(QUOTE_LS_KEY, JSON.stringify(quoteToSave));

        setQuote(quoteToSave);
      } catch (error) {
        console.error('Failed to get quote:', error);
      }
    };

    getQuote();
  }, []);

  return { quote };
};
