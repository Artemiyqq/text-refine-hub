import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private apiService: ApiService,
    private resultService: ResultService,
    private router: Router) { }

  async handlePastedText(pastedText: string): Promise<void> {
    const result = await this.apiService.postPastedText(pastedText);
    this.resultService.setProcessedText(result);
    this.router.navigate(['/processed-text']);
  }

  async handleUserFile(file: File) {
    const result = await this.apiService.postDocxFile(file);
    console.log(result)
    this.resultService.setLinkToProcessedFile(result);
    this.router.navigate(['/processed-file']);
  }
}
