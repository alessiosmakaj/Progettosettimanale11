import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utente } from '../models/utente.interface';

@Injectable({
    providedIn: 'root',
})
export class UtentiService {

    baseURL = environment.baseURL;

    constructor(private http: HttpClient) {}

    recuperaUtenti() {
        return this.http.get<Utente[]>(`${this.baseURL}users`);
    }

    recuperaUtente(id: number) {
        return this.http.get<Utente>(`${this.baseURL}users/${id}`);
    }
}
