import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { Data } from '../data'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Data[]=[];
  temp:Data[]=[];
  title = 'todolist';
  @ViewChild('todo') todo:ElementRef;
  ngOnInit(): void {
  this.temp = this.todoList.sort((a,b)=>{
     if(a.isChecked>b.isChecked){return 1;}
     if(a.isChecked<b.isChecked){return -1;}
     return 0;
   })
   console.log(this.temp);
   this.todoList = this.temp;
  }
  show(){
    console.log(this.todoList);
  }
  add(task:string):void{
    
    this.todoList.push(new Data(task));
    this.todo.nativeElement.value='';
  }

}
