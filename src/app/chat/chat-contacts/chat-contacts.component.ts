import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.css']
})
export class ChatContactsComponent implements OnInit {

  contacts = [];
  filteredContacts = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.contacts = this.chatService.conversations;
    this.filteredContacts = this.contacts;
  }

  filterContacts(str: string) {
    this.filteredContacts = this.contacts.filter(contact => contact.name.toLowerCase().indexOf(str.toLowerCase()) > -1);
  }

}
