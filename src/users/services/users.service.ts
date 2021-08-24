/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from 'src/products/dtos/products.dtos';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto } from '../dto/user.dto';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}
  private countId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Carlitos',
      lastName: 'Nieves',
      dni: '27570989',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con id #${id} no encontrado`);
    }
    return user;
  }

  findOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    if(!user) {
      throw new NotFoundException(`Usuario con id #${id} no encontrado`);
    } 
    return {
      date: new Date(),
      user,
      produtcs: this.productsService.findAll()
    };
  }

  create(payload: CreateUserDto) {
    const id = (this.countId = this.countId + 1);
    const newProduct = {
      id,
      ...payload,
    };
    this.users.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const user = this.findOne(id);
    if (!user) {
      throw new NotFoundException(`No se encontro el usuario con id #${id}`);
    }
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
