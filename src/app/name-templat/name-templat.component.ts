import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-templat',
  templateUrl: './name-templat.component.html',
  styleUrls: ['./name-templat.component.scss']
})
export class NameTemplatComponent implements OnInit {
 @Input() name ='';
 @Input() title ='';
 @Input() email ='';
 @Input() address ='';
 @Input() ad1 = '';
 @Input() phone ='';
 @Input() linkedin='';
 @Input() github='';

  constructor() { }
  ngOnInit(): void {
  }

}
