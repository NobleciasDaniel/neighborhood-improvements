import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NeighborsComponent } from './components/neighbors/neighbors.component';
import { SuccessImprovementsComponent } from './components/success-improvements/success-improvements.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NeighborsComponent,
    SuccessImprovementsComponent,
    MainWrapperComponent,
    ProgressBarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
