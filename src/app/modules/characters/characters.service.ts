import { LoadingService } from './../../core/services/loading.service';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, BehaviorSubject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  private timestamp: number = new Date().getTime();
  private hash: string;
  private apiUrl: string = 'https://gateway.marvel.com/v1/public/characters';
  private authUrl: string;

  public haveRequest: boolean = false;
  public searching: boolean = false;

  characters = new BehaviorSubject<any>(null);

  get characters$() {
    return this.characters.asObservable()
  }

  constructor(private http: HttpClient, private _loadingService: LoadingService) {
    this.hash = Md5.hashStr(
      this.timestamp + environment.privateK + environment.publicK
    );
    this.authUrl = `${this.apiUrl}?ts=${this.timestamp}&apikey=${environment.publicK}&hash=${this.hash}`
  }


  getAllCharacters(offset: number, limit: number) {
    this.haveRequest = true

    const finalUrl = `${this.authUrl}&limit=${limit}&offset=${offset}`;
    const result: any = this.http.get(finalUrl);

    let subject = result.pipe(tap(() => { this.haveRequest = false; this._loadingService.hide() }))
      .subscribe((res: any) => this.characters.next(res.data.results))

  }

  searchCharacters(search: string,) {
    this._loadingService.show()

    if (search == '') {
      this.getAllCharacters(0, 40);
      return this.searching = false;
    }

    this.haveRequest = true
    this.searching = true;
    const finalUrl = `${this.authUrl}&nameStartsWith=${search}&limit=9`;
    const result: any = this.http.get(finalUrl);

    let subject = result.pipe(tap(() => { this.haveRequest = false; this._loadingService.hide() }))
      .subscribe((res: any) => { this.characters.next(res.data.results) })
    return;
  }

}
