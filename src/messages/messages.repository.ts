import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable() // this is the container that will be figured out what each dependency each class has. we then ask the container to create an instance of a class for us. Container creates all required dependencies and gives us the instance. Container will hold onto the created dependency instances and reuse them if needed. This
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
