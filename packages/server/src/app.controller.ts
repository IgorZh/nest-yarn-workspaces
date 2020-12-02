import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { fromCommon } from '@nest-yarn-workspaces/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    fromCommon();
    return this.appService.getHello();
  }
}
