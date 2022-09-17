import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChattService {

  constructor(private http: HttpClient) { }



sendDataFormService(data:any){


return this.http.post("http://127.0.0.1:8000/chatt", data)

}

getDataFormService(){


  return this.http.get("http://127.0.0.1:8000/chatt")

  }




}
