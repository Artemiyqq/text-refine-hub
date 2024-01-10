import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-box-variant',
  templateUrl: './text-box-variant.component.html',
  styleUrls: ['./text-box-variant.component.scss']
})
export class TextBoxVariantComponent {
  @Input() variant: 'paste text' | 'see result' = 'paste text';
  @Input() passedText: string = '';

  @Output() getText = new EventEmitter<string>();

  text: string = '';

  handleProcessButtonClick(): void {
    this.getText.emit(this.text);
  }

  clickOnCopyImg(): void {
    navigator.clipboard.writeText(this.passedText);
  }
}
