import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisaRoutingModule } from './camisa-routing.module';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CamisaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CamisaModule { }
