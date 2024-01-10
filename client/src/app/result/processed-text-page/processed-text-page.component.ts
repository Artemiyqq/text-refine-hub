import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
  selector: 'app-processed-text-page',
  templateUrl: './processed-text-page.component.html',
  styleUrls: ['./processed-text-page.component.scss']
})
export class ProcessedTextPageComponent {
  processedText: string = '';

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    this.resultService.getProcessedText().subscribe((text => {
      this.processedText = text;
    }));
  }
}
