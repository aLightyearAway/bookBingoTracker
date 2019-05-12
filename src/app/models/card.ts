import { Book } from '../models/book';

export class Card{
  id: number;
  title: string;
  description: string;
  done?: boolean;
  book?: Book;
}