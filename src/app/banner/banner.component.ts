import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];
  layout: { [key: string]: boolean } = {     
    horizontal: false,     
    horizontalRev: false,     
    vertical: false,     
    verticalRev: false   
}

  setLayout(selectedLayout: string) {
    this.layout = {[selectedLayout]: true};
  }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }
  
  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }
  changeColor1(color: string){
    this.color1=color;
  }
  changeColor2(color: string){
    this.color2=color;
  }
}
