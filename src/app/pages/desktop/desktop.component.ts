import { ScreenSize } from './../../interface/size.enum';
import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  bodyWidth = 0;
  bodyHeight = 0;

  constructor() {}
  ngOnInit(): void {
    this.getSizeScreen();
  }

  private getSizeScreen() {
    const body = document.querySelector('body');

    if (body) {
      this.bodyHeight = body.clientHeight;
      this.bodyWidth = body.clientWidth;
    }
  }

  public getPerScreenScale() {
    const body = document.querySelector('body');

    if (body) {
      this.bodyHeight = body.clientHeight;
      this.bodyWidth = body.clientWidth;
    }
    let scaleValue = 1;

    if (
      this.bodyHeight < ScreenSize.height ||
      this.bodyWidth < ScreenSize.width
    ) {
      let notEnd = true;

      for (let i = 99; i >= 0 && notEnd; i--) {
        const currentHeight = (ScreenSize.height * i) / 100;
        const currentWidth = (ScreenSize.width * i) / 100;

        if (currentHeight < this.bodyHeight && currentWidth < this.bodyWidth) {
          notEnd = false;
          scaleValue = i / 100;
        }
      }
    } else if (
      this.bodyHeight - ScreenSize.height > 50 ||
      this.bodyWidth - ScreenSize.width > 50
    ) {
      let notEnd = true;

      for (let i = 101; i <= 500 && notEnd; i++) {
        const currentHeight = (ScreenSize.height * i) / 100;
        const currentWidth = (ScreenSize.width * i) / 100;

        if (
          this.bodyHeight - currentHeight <= 50 ||
          this.bodyWidth - currentWidth <= 50
        ) {
          notEnd = false;
          scaleValue = i / 100;
        }
      }
    }

    return `scale(${scaleValue})`;
  }
}
