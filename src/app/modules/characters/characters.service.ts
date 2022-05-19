import { Injectable } from '@angular/core';
import { catchError, Observable, of, BehaviorSubject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  timestamp: number = new Date().getTime();
  hash: string;
  url: string = 'https://gateway.marvel.com/v1/public/characters';

  characters = new BehaviorSubject<any>(null);

  public haveRequest: boolean = false;
  public searching: boolean = false;

  get characters$() {
    return this.characters.asObservable()
  }

  constructor(private http: HttpClient) {
    this.hash = Md5.hashStr(
      this.timestamp + environment.privateK + environment.publicK
    );
  }

  getAllCharacters(offset: number, limit: number) {
    this.haveRequest = true
    const finalUrl = `${this.url}?ts=${this.timestamp}&apikey=${environment.publicK}&hash=${this.hash}&limit=${limit}&offset=${offset}`;
    const result: any = this.http.get(finalUrl);

    let subject = result.pipe(tap(() => { this.haveRequest = false }))
      .subscribe((res: any) => this.characters.next(res.data.results))


    // this.characters.next(this.charact ers.getValue() + result);
  }
}
