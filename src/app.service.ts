import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!,\n Env:${process.env.ENVIRONMENT}, \nPORT: ${process.env.MAIN_PORT}\n MONGO_URI:${process.env.MONGO_URI}} `;
  }

  healths(): any {
    return 'ok';
  }
}
