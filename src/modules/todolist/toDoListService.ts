import { InjectModel } from "@nestjs/mongoose";
import { ToDoList } from "../../schemas/toDoList.schema";
import mongoose from "mongoose";
import { Injectable} from "@nestjs/common";
import { CreateToDoListDto } from "./dto/createToDoList.dto";
import { UpdateToDoListDto } from "./dto/updateToDoList.dto";

@Injectable()
export class ToDoListService{
    constructor(@InjectModel(ToDoList.name) private model : mongoose.Model<ToDoList>) {}

    async addAsync(dto : CreateToDoListDto) : Promise<ToDoList>{
        var newToDoList = new this.model({
            items : dto.items,
            createdBy : 'virtuality',
            createdDate : new Date(),
            isDeleted : false,
            name : dto.name
        }); 
        return await newToDoList.save();
    }

    async getByNameAsync(name : string) : Promise<ToDoList>{
        var list = await this.model.findOne({name : name, isDeleted : false}).exec();
        if(!list)
            throw new Error(`No list with name ${name} found.`);
        return list;
    }

    async getAllAsync() : Promise<ToDoList[]>{
        return await this.model.find({isDeleted : false}).sort({createdDate : -1}).exec();
    }

    async deleteAsync(name : string) : Promise<string>{
        var list = await this.model.findOne({isDeleted : false, name : name}).exec(); 
        if(!list)
            throw new Error(`No list with name ${name} found.`);
        await this.model.updateOne({name}, {isDeleted: true}).exec();
        return `List with name ${name} is deleted.`;
    }

    async updateAsync(model : UpdateToDoListDto) : Promise<string>{
        var list = await this.model.findOne({name : model.name}).exec(); 
        if(!list)
            throw new Error(`No list with name ${model.name} found.`);
        await this.model.updateOne({name : model.name}, model);
        return `List with name ${model.name} is updated.`;
    }
}