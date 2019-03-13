export class Data {
    task: string;
    isChecked:string;
    constructor(task:string){
        this.task=task;
        this.isChecked='No';
    }
    

    disp(){
        return this.task;
    }
    alterCheck(){
        console.log(this.isChecked);
        if(this.isChecked==="Yes")
        {this.isChecked = "No";
            console.log("yes if")        
    }
        else if(this.isChecked==="No")
        {this.isChecked = "Yes";
        console.log("yes no")  
    }
    w
    }
}