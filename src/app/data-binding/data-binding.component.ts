import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = "http://livramento.dev";
  likedCourse: boolean = true;
  imageUrl = "https://picsum.photos/400/200";

  getValor() {
    return 3;
  }

  getLikedCourse() {
    return true;
  }
}
