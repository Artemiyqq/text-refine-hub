import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
  selector: 'app-processed-text-page',
  templateUrl: './processed-text-page.component.html',
  styleUrls: ['./processed-text-page.component.scss']
})
export class ProcessedTextPageComponent implements OnInit, OnDestroy {
  processedText: string = '';

  constructor(private resultService: ResultService,
              private router: Router) {}

  ngOnInit(): void {
    this.resultService.getProcessedText().subscribe((text => {
      this.processedText = text;
    }));
  }

  backToHomePage(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.resultService.cleanLinkToProcessedFile();
  }
}
