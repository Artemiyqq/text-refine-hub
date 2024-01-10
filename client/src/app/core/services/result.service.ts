import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private processedTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private linkToProcessedFileSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  

  setProcessedText(processedText: string): void{
    this.processedTextSubject.next(processedText);
  }

  getProcessedText(): Observable<string> {
    return this.processedTextSubject.asObservable();
  }

  setLinkToProcessedFile(linkToProcessedFile: string): void{
    this.linkToProcessedFileSubject.next(linkToProcessedFile);
  }

  getLinkToProcessedFile(): Observable<string> {
    return this.linkToProcessedFileSubject.asObservable();
  }
}
