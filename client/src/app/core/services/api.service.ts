import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { TextDTO } from '../models/text-dto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SERVER_ERROR_CODE } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private textApiUrl = `${environment.apiUrl}/Text`
  private docxApiUrl = `${environment.apiUrl}/Docx`

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  async postPastedText(text: string): Promise<string> {
    const textDto: TextDTO = new TextDTO(text);
    try {
      const result = await this.postRequest(this.textApiUrl, textDto);
      return result as string;
    } catch (error: any) {
      this.handleApiError(error);
      return String(error.status);
    }
  }

  async postDocxFile(file: File): Promise<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    try {
      const result = await this.postRequest(this.docxApiUrl, formData);
      return result as string;
    } catch (error: any) {
      this.handleApiError(error);
      return String(error.status);
    }
  }

  async postRequest(url: string, data: any) {
    return lastValueFrom(this.http.post(url, data, { responseType: 'text' }));
  }

  private handleApiError(error: any): void {
    console.log('Error in API service:', error);

    if (String(error.status) == SERVER_ERROR_CODE) {
      this.showSnackBar('There is a problem with the server. Please try again later');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar'],
      });
  }
}
