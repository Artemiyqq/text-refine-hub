import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
  selector: 'app-processed-file-page',
  templateUrl: './processed-file-page.component.html',
  styleUrls: ['./processed-file-page.component.scss']
})
export class ProcessedFilePageComponent implements OnInit, AfterViewInit {
  linkToProcessedFile: string = "";

  @ViewChild('downloadLink') downloadLink!: ElementRef;

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    this.resultService.getLinkToProcessedFile().subscribe((link => {
        this.linkToProcessedFile = link;
      }));     
  }

  ngAfterViewInit(): void {
    this.triggerDownload();
  }

  private triggerDownload(): void {
    if (this.linkToProcessedFile) {
      // Programmatically click the hidden download link
      this.downloadLink.nativeElement.click();
    }
  }
}
