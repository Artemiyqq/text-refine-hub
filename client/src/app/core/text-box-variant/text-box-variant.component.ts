import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-text-box-variant',
  templateUrl: './text-box-variant.component.html',
  styleUrls: ['./text-box-variant.component.scss']
})
export class TextBoxVariantComponent implements OnInit {
  @Input() variant: 'paste text' | 'see result' = 'paste text';
  @Input() passedText: string = '';

  @Output() getText = new EventEmitter<string>();

  text: string = '';

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl: any) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  handleProcessButtonClick(): void {
    this.getText.emit(this.text);
  }

  clickOnCopyImg(): void {
    navigator.clipboard.writeText(this.passedText);
  }
}
