// messagesService is dependent on the MessagesRepository
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    // this.messagesRepo = new MessagesRepository(); // this way is bad because MessagesService creates its own instance of MessagesRepository
    // DON'T DO THIS ON REAL APPS
    // Service is creating its own dependencies
    // Better MessagesService receives its dependency
    // The Best Solution : MessagesService receives its dependency, and it does not specifically require 'MessagesRepository'
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
