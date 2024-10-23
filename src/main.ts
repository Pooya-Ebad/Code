import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app/app.module';
import { swaggerConfigInit } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfigInit(app)
  const {PORT} = process.env
  await app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/swagger`);
  });
}
bootstrap();
