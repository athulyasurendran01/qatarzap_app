import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private serverURL = 'https://almauna.com/laravel/backend/api/';

    constructor(public http: Http) { }

    apiTokenRequestGet(url, data): Observable<any> {
        let appurl = this.serverURL + url;
        return this.http.get(appurl, data);
    }

    getServerURL(){
        return 'https://almauna.com/laravel/backend';
    }
}