import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  memes: string[] = [
    'img1',
    'img2',
    'img3',
    'img4'
  ]
  className: string = 'img4';

  width = 0;
  height = 0;
  realWidth = this.width - 250; 
  fontSize = 45;

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }
  getBannerStyles() {
    return {
      width: `500px`,
      height: `500px`,
      paddingLeft: `${this.width}px`,
      paddingTop: `${this.height}px`,
      boxSizing: `border-box`,
    };
  }
  changePicture(selectedPicture: string){
    this.className=selectedPicture;
  }


}
