import { Image } from './Image';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Image[];
  etsy: string;
  featured: boolean;
}