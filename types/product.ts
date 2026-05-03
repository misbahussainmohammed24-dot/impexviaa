export interface BuyerComment {
  name: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;

  rating: number;
  origin: string;
  category: string;

  specs?: string[];            // your dataset uses this
  specifications?: string[];   // fallback support

  certifications: string[];
  packaging: string;
  supply: string;

  targetMarket: string[];
  tradeTerms: string;

  hsn: string;
  description: string;

  comments: BuyerComment[];

  moq?: string;
}