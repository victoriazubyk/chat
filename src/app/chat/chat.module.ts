import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatContactsComponent } from './chat-contacts/chat-contacts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ChatDialogComponent, ChatContactsComponent, ChatHomeComponent],
  exports: [ChatDialogComponent, ChatContactsComponent],
  providers: [ChatService]
})
export class ChatModule { }
