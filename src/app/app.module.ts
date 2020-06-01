import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ChatHomeComponent } from './chat/chat-home/chat-home.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

const appRoutes: Routes = [
  {path: '', component: ChatHomeComponent},
  {path: ':id', component: ChatDialogComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
