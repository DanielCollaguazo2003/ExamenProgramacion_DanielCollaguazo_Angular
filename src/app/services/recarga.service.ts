import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Recarga } from '../domain/recarga';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  constructor(private http: HttpClient) {

  }


  //MEtodo para devolver Recargas:
  getRecargas(){
    let url = environment.WS_PATH + "/Recargas/list"
    return this.http.get<any>(url)
  }

  //Metodo para guardar Recargas
  saveRecarga(recarga: Recarga){
    let url = environment.WS_PATH + "/recarga"
    return this.http.post<any>(url, recarga);
  }

}
