import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-toggle-dark',
  templateUrl: './toggle-dark.component.html',
  styleUrls: ['./toggle-dark.component.scss'],
})
export class ToggleDarkComponent  implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  toggleTheme(event:any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
      //xd
    }
    if(!event.detail.checked){
      document.body.setAttribute('color-theme','');
      //
    }
  }
  ngOnInit() {}
  

}
