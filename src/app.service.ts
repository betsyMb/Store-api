/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any,
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  getHello(): any {
    return { message: `Hello World! ${this.configService.apiKey} and ${this.configService.database.name}`, tasks: this.tasks };
  }
}
