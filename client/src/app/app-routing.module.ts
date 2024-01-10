import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProcessedTextPageComponent } from './result/processed-text-page/processed-text-page.component';
import { ProcessedFilePageComponent } from './result/processed-file-page/processed-file-page.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'processed-text', component: ProcessedTextPageComponent },
  { path: 'processed-file', component: ProcessedFilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
