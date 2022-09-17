import { Component, OnInit} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],

})
export class CVComponent implements OnInit {

  closeResult: any
  
  constructor(private offcanvasService: NgbOffcanvas) { }

  isShowDivIf = true;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

 
  ngOnInit(): void {
  }

}
