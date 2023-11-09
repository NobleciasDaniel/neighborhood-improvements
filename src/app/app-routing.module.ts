import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/improvements',
  pathMatch: 'full'
}, {
  path: 'improvements',
  component: MainWrapperComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
