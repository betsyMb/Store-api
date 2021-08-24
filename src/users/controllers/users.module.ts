/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { UsersService } from '../services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
