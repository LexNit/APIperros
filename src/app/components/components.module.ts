import { IonicModule } from '@ionic/angular';
import { FlashHeaderComponent } from './flash-header/flash-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FlashHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FlashHeaderComponent
  ]
})
export class ComponentsModule { }
