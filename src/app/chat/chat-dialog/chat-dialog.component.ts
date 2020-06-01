import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from './../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages = [];
  formValue: string;
  currentChatId: number;
  currentContact: any;

  constructor(private router: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    this.router.params.subscribe(({ id }) => {
      this.messages = [];
      this.currentChatId = +id;
      this.currentContact = this.chatService.conversations.find(contact => contact.id === this.currentChatId);
      this.chatService.conversations[+id].conversation
        .subscribe(value => {
          this.messages = [...value];
        });
    });

  }

  sendMessage() {
    if (this.formValue) {
      this.chatService.converse(this.currentChatId, this.formValue);
      this.formValue = '';
    }
  }

}
