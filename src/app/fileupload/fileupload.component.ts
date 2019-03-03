import { NgModule, Component, Input, Output, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html'})

export class FileuploadComponent  {
  image;

  changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.image = myReader.result;
    console.log(myReader.result);
  }
  myReader.readAsDataURL(file);
}
}


export class FileuploadModule { 
  
}
