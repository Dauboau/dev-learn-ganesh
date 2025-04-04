import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { GaneshData } from '../../interfaces/GaneshData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getGaneshData(){
    return this.http.get<GaneshData>('assets/GaneshData.json');
  }

}
