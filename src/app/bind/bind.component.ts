import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgSrc: string = 'http://via.placeholder.com/877x150';

  constructor() {
  }

  ngOnInit() {
  }

  doOnClick(e: any) {
    console.log(e);
  }

  doOnInput(e: any) {
    console.log(e.target.value);
    console.log(e.target.getAttribute('value'));
  }
}
