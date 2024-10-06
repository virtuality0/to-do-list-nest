import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString} from "class-validator";

export class UpdateToDoListDto{
    @IsString()
    @ApiProperty()
    name : string;

    @ApiProperty()
    items : ListItem[];

    @IsBoolean()
    @ApiProperty()
    isDeleted : boolean
}

export class ListItem{
    @ApiProperty()
    description : string;
}