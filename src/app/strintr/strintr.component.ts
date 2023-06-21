import { Component } from '@angular/core';

@Component({
  selector: 'app-strintr',
  templateUrl: './strintr.component.html',
  styleUrls: ['./strintr.component.css']
})
export class STRINTRComponent 
{
  public Name = "Kushal";

  public Display() : string
  {
    return "Marvellous Infosystems"
  }


}
