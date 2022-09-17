import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private http:HttpClient) { }

postNote(notes:any){

  return this.http.post("http://localhost:3000/Notes/", notes)
}
getNotes(){
  return this.http.get("http://localhost:3000/Notes")
 }
}
 