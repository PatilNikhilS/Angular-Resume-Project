import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-carricular',
  templateUrl: './extra-carricular.component.html',
  styleUrls: ['./extra-carricular.component.scss']
})
export class ExtraCarricularComponent implements OnInit {
@Input() extra:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
