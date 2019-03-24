import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { ExemploComponent } from './exemploIntegracao/exemplo/exemplo.component';
import { HttpClientModule } from '@angular/common/http';

const rotas: Routes = [
  { path: 'feed', component: FeedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ExemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( rotas )    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
