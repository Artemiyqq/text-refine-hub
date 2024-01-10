import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { TextBoxVariantComponent } from './text-box-variant/text-box-variant.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    TextBoxVariantComponent,
    FileUploaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    ApiService
  ],
  exports: [
    TextBoxVariantComponent,
    FileUploaderComponent,
  ]
})
export class CoreModule { }
