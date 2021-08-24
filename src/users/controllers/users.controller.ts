/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from 'src/products/dtos/products.dtos';
import { CreateUserDto } from '../dto/user.dto';
import { UsersService } from '../services/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  @ApiOperation({summary: 'List of users'})
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get(':id/orders')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOrdersByUser(id);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
      return this.usersService.create(payload);
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto)  {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
