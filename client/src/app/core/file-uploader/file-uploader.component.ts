import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @Input() text: string = '';

  @Output() getFile = new EventEmitter<File>();


  handleSelectingFile(event: any): void {
    const file: File = event.target.files[0];
    this.getFile.emit(file);
  }
}
