import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent, ItemComponent } from './';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadingComponent,
    ItemComponent
  ],
  exports: [
    CommonModule,
    LoadingComponent,
    ItemComponent
  ]
})
export class ComponentModule { }
