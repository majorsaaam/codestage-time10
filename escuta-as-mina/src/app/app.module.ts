import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ExemploComponent } from './exemploIntegracao/exemplo/exemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PublicacaoComponent } from './publicacao/publicacao.component';

const rotas: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: 'exemploREST', component: ExemploComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'publicacao', component: PublicacaoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ExemploComponent,
    FeedComponent,
    DashboardComponent,
    PublicacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( rotas ),
    TooltipModule.forRoot(),
    HttpClientModule  ,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
