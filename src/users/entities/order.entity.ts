/* eslint-disable prettier/prettier */
import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';

export class Order {
  date: Date;
  user: User;
  produtcs: Product[];
}
