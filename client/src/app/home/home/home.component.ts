import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_ERROR_CODE } from 'src/app/core/constants/api.constants';
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
    if (result !== SERVER_ERROR_CODE) {
      this.resultService.setProcessedText(result);
      this.router.navigate(['/processed-text']);
    }
  }

  async handleUserFile(file: File) {
    const result = await this.apiService.postDocxFile(file);
    if (result !== SERVER_ERROR_CODE) {
      this.resultService.setLinkToProcessedFile(result);
      this.router.navigate(['/processed-file']);
    }
  }
}
