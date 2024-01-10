import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { TextDTO } from '../models/text-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private textApiUrl = `${environment.apiUrl}/Text`
  private docxApiUrl = `${environment.apiUrl}/Docx`

  constructor(private http: HttpClient) { }

  async postPastedText(text: string): Promise<string> {
    const textDto: TextDTO = new TextDTO(text);
    try {
      const result = await lastValueFrom(this.http.post(this.textApiUrl, textDto, { responseType: 'text' }));
      return result as string;
    } catch (error) {
      console.error('Error while trying to get processed text: ', error)
      throw error;
    }
  }

  async postDocxFile(file: File): Promise<string> {
    try {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const result = await lastValueFrom(this.http.post(this.docxApiUrl, formData, { responseType: 'text' }));
      return result as string;
    } catch (error) {
      console.log('Error in processing docx', error);
      throw error;
    }
  }
}
