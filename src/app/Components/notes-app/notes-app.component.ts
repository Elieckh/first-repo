import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { NotesServiceService } from 'src/app/Services/notes-service.service';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.css'],
})
export class NotesAppComponent implements OnInit {
  constructor(private NotesServiceService: NotesServiceService) {}

  ngOnInit(): void {
    this.getNotes();
  }
  dataArray: any = [];

  onSendData(notes: any) {
    this.NotesServiceService.postNote(notes).subscribe(
      (result) => (this.dataArray = result)
    );
    this.getNotes();
  }

  refreshData: any;



  getNotes() {
    this.NotesServiceService.getNotes().subscribe((result) => {
      this.dataArray = result;
      this.dataArray.sort((a: any, b: any) => b.id - a.id);
    });
  }
}
