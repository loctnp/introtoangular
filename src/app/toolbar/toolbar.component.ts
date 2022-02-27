import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // selector: '.app-toolbar',
  // selector: '[app-toolbar]',
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // @Input() public parentData:any
  @Input('parentData') public anotherName:any
  @Output() public childEvent = new EventEmitter();
  sendData(){
    let data={
      "id":3,
      "name":"iphone 6s plus",
      "price":500,
    }
    this.childEvent.emit(data)
  }

  name:any = "Ron";
  
  public framework = "vuejs";
  frameworks = ["Angular","VueJS","ReactJS", "NodeJs"]
  models = "angular"
  
  isDisable:boolean = true;

  show: boolean = false;
  
  constructor() { }

  isErr: boolean = false
  success:string="text-success"
  danger:string ="text-danger"
  blueHeader = {
    color:"blue",
    fontSize:"24px",
    fontStyle:"italic"
  }
  myHeader = {
    "text-success":true,
    "h1":true,
  }
  
  ngOnInit(): void {
  }
  
  changeProperty():void{
    this.isDisable = !this.isDisable
  }
  
  myFunction():void{
    if(confirm('Are you sure you want to change framework')){
      this.framework = "ReactJS"
    }else{
      console.log('cancel changing framework');
    }
  }

  setDefault():void{
    this.name="Ron"
  }

  showMe():void{
    this.show = !this.show
  }
  
}
