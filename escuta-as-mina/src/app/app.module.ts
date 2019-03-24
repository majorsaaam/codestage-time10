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
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const rotas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'exemploREST', component: ExemploComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'publicacao', component: PublicacaoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ExemploComponent,
    FeedComponent,
    DashboardComponent,
    PublicacaoComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( rotas ),
    TooltipModule.forRoot(),
    HttpClientModule  ,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
