import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`API Running on PORT ${process.env.MAIN_PORT}`);
  console.log(`ENVIRONMENT : ${process.env.ENVIRONMENT}`);
  console.log(`MONGO_URI : ${process.env.MONGO_URI}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.MAIN_PORT);
}
bootstrap();
