import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import {ChattService} from '../../Services/chatt.service';



@Component({
  selector: 'app-chatt',
  templateUrl: './chatt.component.html',
  styleUrls: ['./chatt.component.css']
})
export class ChattComponent implements OnInit {

  @ViewChild("viewAreas")  viewAreas!:ElementRef;

  constructor( private chatt:ChattService) { }
mytimer:any;
  ngOnInit(): void {



    this.getDataForm()
    this.mytimer=setInterval(()=>{

      this.getDataForm();
      this.viewAreas.nativeElement.scrollTop=this.viewAreas.nativeElement.scrollHeight

    },500)

  }

  sendDataForm(data:any){

  this.chatt.sendDataFormService(data).subscribe()
  console.log(data)
  this.mytimer=setInterval(()=>{

    this.getDataForm();
    this.viewAreas.nativeElement.scrollTop=this.viewAreas.nativeElement.scrollHeight

  },500)

}

dataArray:any=[]

getDataForm(){

this.chatt.getDataFormService().subscribe((data)=>{

this.dataArray=data;

})
}

isDisplayed = true;

showMe()
{
    if(this.isDisplayed)
    {
        this.isDisplayed = false;
    }else{
        this.isDisplayed = true;
    }
}

  fixscroll(){

    clearInterval(this.mytimer)
    console.log("scrollheight: "+this.viewAreas.nativeElement.scrollHeight +' scrollTop: ' + this.viewAreas.nativeElement.scrollTop)


    if(this.viewAreas.nativeElement.scrollTop==this.viewAreas.nativeElement.scrollHeight+50){
      this.mytimer=setInterval(()=>{

        this.getDataForm();
        this.viewAreas.nativeElement.scrollTop=this.viewAreas.nativeElement.scrollHeight

      },500)

    }
  }


}
