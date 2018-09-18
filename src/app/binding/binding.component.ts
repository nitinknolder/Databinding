import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
   imageUrl: string = 'assets/images/Databinding.png';
   // currentValue: boolean = true;
  currentValue: boolean = false;
  ngOnInit() {
  }
  onClick() {
    if (!this.currentValue) {
      alert('I am enable in property binding');
    }
  }

}
