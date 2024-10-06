import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateToDoListDto{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name : string; 

    @ApiProperty()
    items : ListItem[]
}

export class ListItem{
    @ApiProperty()
    description : string;
}