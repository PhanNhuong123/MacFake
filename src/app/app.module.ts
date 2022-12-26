import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { DockComponent } from './pages/desktop/dock/dock.component';

@NgModule({
  declarations: [AppComponent, DesktopComponent, DockComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
