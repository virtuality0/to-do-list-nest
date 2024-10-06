import { Module } from "@nestjs/common";
import { ToDoListController } from "./toDoList.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ToDoList, ToDoListSchema } from "../../schemas/toDoList.schema";
import { ToDoListService } from "./toDoListService";

@Module({
    controllers : [ToDoListController],
    imports : [MongooseModule.forFeature([{name : ToDoList.name, schema : ToDoListSchema}])],
    providers : [ToDoListService]
})
export class ToDoListModule {};