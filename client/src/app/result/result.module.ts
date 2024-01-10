import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ProcessedTextPageComponent } from './processed-text-page/processed-text-page.component';
import { ProcessedFilePageComponent } from './processed-file-page/processed-file-page.component';



@NgModule({
  declarations: [
    ProcessedTextPageComponent,
    ProcessedFilePageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class ResultModule { }
