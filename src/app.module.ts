import { Module } from '@nestjs/common';
import { ToDoListModule } from './modules/todolist/toDoList.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: 
  [ 
    ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal : true,
    }),
    ToDoListModule,
    MongooseModule.forRoot(process.env.MongoServerUrl),
  ],
  exports:[ConfigModule]

})
export class AppModule {}
