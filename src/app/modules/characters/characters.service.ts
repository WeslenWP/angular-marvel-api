import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  privateK: string = environment.privateK;
  publicK: string = environment.publicK;
  timestamp: number = new Date().getTime();
  hash: string;
  url: string = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private http: HttpClient) {
    this.hash = Md5.hashStr(this.timestamp + this.privateK + this.publicK);
  }

  getAllCharacters(offset: number, limit: number): Observable<any> {
    const finalUrl = `${this.url}?ts=${this.timestamp}&apikey=${this.publicK}&hash=${this.hash}&limit=${limit}&offset=${offset}`;
    return this.http.get(finalUrl);
  }

  private log(message: string) {
    console.log(`Error: ${message}`);
  }
}
