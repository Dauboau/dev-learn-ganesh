import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { GaneshData } from '../interfaces/GaneshData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaneshDataService {

  constructor(
    private http: HttpClient
  ) { }

  getGaneshData(): Observable<GaneshData> {
    return this.http.get<GaneshData>('assets/GaneshData.json');
  }

}
