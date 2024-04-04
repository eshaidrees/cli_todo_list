#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [ ];
let condition = true;

while(condition){
    let Add = await inquirer.prompt([
        {
            name:"Question1",
            type:"input",
            message:"What would you like to add in your todos?"
        },
        {
            name:"Question2",
            type:"confirm",
            message:"Would you like to add more items to your to-do list?",
            default:"true"
        }
    ]);
    
    todos.push(Add.Question1);
    condition=Add.Question2;
    console.log(todos);
};



