import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Message {
  constructor(public content: string, public sentBy: string, public date: Date) {}
}

@Injectable()
export class ChatService {

  conversations = [
    {
      id: 0,
      name: 'Leonid Teriohin',
      conversation: new BehaviorSubject([])
    },
    {
      id: 1,
      name: 'Ostap Ferneza',
      conversation: new BehaviorSubject([
        {content: 'Привіт))', sentBy: 'user', date: new Date()}
        {content: 'Як справи?', sentBy: 'user', date: new Date()}
        {content: 'Привіт. Норм', sentBy: 'bot', date: new Date()}
        {content: 'Йдеш тусіть?)', sentBy: 'user', date: new Date()}
        {content: 'Го', sentBy: 'bot', date: new Date()}
      ])
    },
    {
      id: 2,
      name: 'Vlad Darmohray',
      conversation: new BehaviorSubject([])
    },
    {
      id: 3,
      name: 'Accorn Dobrovolskiy',
      conversation: new BehaviorSubject([])
    },
  ];

  constructor(private http: HttpClient) { }

  update(id: number, msg: Message) {
    const currentContact = this.conversations.find(user => user.id === id);
    currentContact.conversation.next(currentContact.conversation.getValue().concat([msg]));
  }

  converse(id: number, msg: string) {
    const userMessage = new Message(msg, 'user', new Date());
    this.update(id, userMessage);

    return this.http.get('https://api.chucknorris.io/jokes/random')
      .subscribe((response: any) => {
        const botMessage = new Message(response.value, 'bot', new Date());
        this.update(id, botMessage);
      });
  }

}
