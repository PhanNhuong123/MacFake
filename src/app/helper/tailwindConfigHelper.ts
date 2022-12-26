import DockData from '../mock/dockData';
import { IBackGroundImage } from './../interface/tailwind.interface';

export function getBackGroundImage(): IBackGroundImage {
  const result: IBackGroundImage = {};

  // Icon for app dock
  DockData.forEach((app) => {
    result[app.Name] = app.srcImg;
  });

  return result;
}
