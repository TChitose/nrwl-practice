import { Injectable } from '@angular/core';
import { Color } from '@nrwl-practice/model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class GetColorListService {

  constructor(
    private apiService: ApiService
  ) { }

  execute(): Observable<Color[]>{
    return this.apiService.get<Color[]>('/api/color');
  }
}
