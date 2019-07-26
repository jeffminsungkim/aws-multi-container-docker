import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'nestjs-config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('typeorm'),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule { }
