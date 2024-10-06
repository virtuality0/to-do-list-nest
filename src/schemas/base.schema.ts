import { Prop } from "@nestjs/mongoose";

export class Base
{
    @Prop()
    createdBy : string; 

    @Prop()
    createdDate : Date;

    @Prop()
    isDeleted : boolean;
}