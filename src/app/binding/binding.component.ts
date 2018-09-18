import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
   title = 'Learning string interpolation';
  ngOnInit() {
  }
changeMyTitle() {
  this.title = 'Learning Event Binding';
  alert('Title is Changed to: ' + this.title);
}

}
