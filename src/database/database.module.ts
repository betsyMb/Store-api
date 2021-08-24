/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';

const API_KEY = 'ke onda prro';
@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
