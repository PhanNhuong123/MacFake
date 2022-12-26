import { DesktopComponent } from './pages/desktop/desktop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "desktop" , component: DesktopComponent},
  {path: "**" , redirectTo:'desktop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
