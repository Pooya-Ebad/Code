import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypOrmConfig } from 'src/config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : join(process.cwd(), '.env')
    }),
    TypeOrmModule.forRoot(TypOrmConfig())
  ],
  controllers: [AppController],  
  providers: [AppService],
})
export class AppModule {}
 