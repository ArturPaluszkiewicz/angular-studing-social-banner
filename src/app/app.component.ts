import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  emulatorType: string = "banner";

  changeEmulatorType(type: string): void{
    this.emulatorType=type;
  }
}