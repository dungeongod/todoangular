import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AskmeComponent } from './askme/askme.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: 'home', component: TodoComponent },
  { path: 'askme', component: AskmeComponent},
  { path: 'about', component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];
@NgModule({ imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {


}