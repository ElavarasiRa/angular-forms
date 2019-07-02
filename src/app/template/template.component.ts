import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
@ViewChild('contactForm') myForm:any;
	data:any={
    'name':'',
    'email':'',
    'gender':'',
    'age':'',
    'adhaar':''
  }
	
  constructor() { }

  ngOnInit() {
  }
add(value){
  this.data.name = value.name;
  this.data.email = value.email;
  this.data.gender = value.gender;
  this.data.age = value.age;
  this.data.adhaar = value.adhaar;

   console.log(this.data);
   this.myForm.reset();
}
}
