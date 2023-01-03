import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resume: any=null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://gist.githubusercontent.com/PatilNikhilS/3e2dee5def537156a156373dc321a968/raw/0553f9d10fae41685a6d8fd2b18e88e9579b9afb/Myresume.json')
    .subscribe(res => {
      this.resume = res;
      console.log(res)
    });
  }
}
