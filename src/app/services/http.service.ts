import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IWish } from '../../types/wish.interface';
import { Observable, map, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient)
  constructor() { }

  getWishes(): Observable<{ whishes: IWish[] }> {
    return this.http.get('assets/wishes.json')
      .pipe(
        map((res: any) => {
          return {
            whishes: res
          }
        })
      )

  }

  getChuseValue(){
    return this.http.get('assets/chuse_wishes.json')
  }

}
