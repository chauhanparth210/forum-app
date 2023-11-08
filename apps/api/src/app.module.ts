import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { typeormConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeormConfig),
    UserModule,
  ],
})
export class AppModule {}
