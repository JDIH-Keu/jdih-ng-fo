import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) },
  { path: 'peraturan', loadChildren: () => import('./main/peraturan/peraturan.module').then(m => m.PeraturanModule) },
  { path: 'putusan', loadChildren: () => import('./main/putusan/putusan.module').then(m => m.PutusanModule) },
  { path: 'artikel', loadChildren: () => import('./main/artikel/artikel.module').then(m => m.ArtikelModule) },
  { path: 'monografi', loadChildren: () => import('./main/monografi/monografi.module').then(m => m.MonografiModule) },
  { path: 'kurs', loadChildren: () => import('./main/kurs/kurs.module').then(m => m.KursModule) },
  { path: 'faq', loadChildren: () => import('./main/faq/faq.module').then(m => m.FaqModule) },
  { path: 'berita', loadChildren: () => import('./main/berita/berita.module').then(m => m.BeritaModule) },
  { path: 'pages', loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule) },
  { path: 'feedback', loadChildren: () => import('./main/feedback/feedback.module').then(m => m.FeedbackModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
