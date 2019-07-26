import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '!(*.d).{ts,js}'),
      {
        path: path.resolve(
          process.cwd(),
          process.env.NODE_ENV === 'staging' ? '.env.staging' : '.env'),
      },
    ),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
