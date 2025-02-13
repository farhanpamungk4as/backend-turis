import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  checkDbConnection() {
    return { message: 'Server is running 🚀' };
  }
}
