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
  curValue: string = "";
  savedValue: string = "";
  name: string = "abc";

  person: any = {
    name: "def",
    age: 20
  }

  getValor() {
    return 3;
  }

  getLikedCourse() {
    return true;
  }

  buttonClicked() {
    alert("Button Clicked");
  }

  saveValue(value: string) {
    this.savedValue = value;
  }

  onKeyUp(e: KeyboardEvent) {
    this.curValue = (<HTMLInputElement>e.target).value;
  }
}
