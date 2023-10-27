import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', redirectTo: 'camisa/index', pathMatch: 'full'},
  {path: 'camisa/home', component: HomeComponent},
  {path: 'camisa/index', component: IndexComponent},
  {path: 'camisa/create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamisaRoutingModule { }
