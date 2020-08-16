import { NgModule } from '@angular/core';
import { NgxStackedProgressbarComponent } from './ngx-stacked-progressbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxStackedProgressbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgxStackedProgressbarComponent]
})
export class NgxStackedProgressbarModule { }
