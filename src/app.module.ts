import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'schema.graphql',
  })],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
