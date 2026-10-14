export type Quote = {
  quote: string;
  author: string;
};

export type StoredQuote = Quote & {
  date: string;
};
