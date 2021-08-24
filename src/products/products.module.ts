/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [CategoriesController, ProductsController],
  providers: [ProductsService, ConfigService],
  exports: [ProductsService],
})
export class ProductsModule {}
