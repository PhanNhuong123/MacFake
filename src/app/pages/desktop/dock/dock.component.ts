import { Component } from '@angular/core';
import DockData from 'src/app/mock/dockData';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent {
  public listApp = DockData
}
