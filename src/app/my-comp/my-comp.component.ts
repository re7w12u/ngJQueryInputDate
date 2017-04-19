import { Component, OnInit, Input,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  public myDate = new Date(2017,1,17);

  @ViewChild('inputdate') input: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery(this.input.nativeElement).datepicker({onSelect:(d)=> {
      console.log(d);
      this.myDate = new Date(d);
    }});
  }

  dateChanged($event){
    console.log($event);    
  }

}
