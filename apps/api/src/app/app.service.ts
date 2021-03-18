import { Injectable } from '@nestjs/common';
import { Color } from '@nrwl-practice/model';

@Injectable()
export class AppService {
  getData(): Color[] {
    return [
      {name:'赤' , code: 'e60033'},
      {name:'紫' , code: '884898'},
      {name:'青' , code: '0095d9'},
      {name:'緑' , code: '3eb370'},
      {name:'黄緑' , code: 'b8d200'},
      {name:'黄色' , code: 'ffd900'},
      {name:'橙色' , code: 'ee7800'},
    ];
  }
}
