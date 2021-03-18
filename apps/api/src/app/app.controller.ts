import { Controller, Get } from '@nestjs/common';
import { Color } from '@nrwl-practice/model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('color')
  getData(): Color[] {
    return this.appService.getData();
  }
}
