import { Component} from '@angular/core';
import { FormGroup, Validators,FormArray, FormBuilder,FormControl } from '@angular/forms';
import { Details } from '../Details';
@Component({
  selector: 'app-askme',
  templateUrl: './askme.component.html',
  styleUrls: ['./askme.component.css']
})
export class AskmeComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    query:['']
  });
  details:Details[]=[];

  constructor(private fb: FormBuilder) { }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.details.push(new Details(this.profileForm.value));
    console.log(this.details);
    console.log(this.profileForm.value);
  }
}


