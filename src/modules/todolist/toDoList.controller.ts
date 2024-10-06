import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ToDoListService } from "./toDoListService";
import { CreateToDoListDto } from "./dto/createToDoList.dto";
import { query } from "express";
import { UpdateToDoListDto } from "./dto/updateToDoList.dto";

@ApiTags()
@Controller('toDoList')
export class ToDoListController{
    constructor(private toDoListService : ToDoListService){}

    @Post('add')
    public async addAsync(@Body() model : CreateToDoListDto) : Promise<any> {
       try{
            return await this.toDoListService.addAsync(model);
        } 
       catch(ex){
            if(ex instanceof Error)
                return {code : '500', message : ex.message}; 
        }
    }

    @Get('getAll')
    public async getAllAsync(): Promise<any>{
        try {
            return await this.toDoListService.getAllAsync();
        }
        catch (ex) {
            if (ex instanceof Error)
                return { Code: 500, message: ex.message }
        }
    }

    @Get('getByName/:name')
    public async getByNameAsync(@Param('name') name : string) : Promise<any>{
        try{
            return await this.toDoListService.getByNameAsync(name);
        }
        catch(ex){
            if(ex instanceof Error)
                return {Code : 500, message : ex.message}
        }
    }

    @Delete('delete')
    public async deleteAsync(@Query('name') name : string) : Promise<any>{
        try{
            return await this.toDoListService.deleteAsync(name);
        }
        catch(ex){
            if(ex instanceof Error)
                return {Code : 500, message : ex.message}
        }
    }

    @Put('update')
    public async updateAsync(@Body() model : UpdateToDoListDto) : Promise<any>{
         try{
            return await this.toDoListService.updateAsync(model);
        }
        catch(ex){
            if(ex instanceof Error)
                return {Code : 500, message : ex.message}
        }
    }
}