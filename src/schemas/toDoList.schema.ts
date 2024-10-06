import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "./base.schema";

export type ToDoListDocument = ToDoList & Document

@Schema()
export class listItem
{
    @Prop()
    description : string
}

@Schema()
export class ToDoList extends Base
{
    @Prop({required : true, unique : true})
    name : string

    @Prop([listItem])
    items : listItem[]
}

export const ToDoListSchema = SchemaFactory.createForClass(ToDoList); 