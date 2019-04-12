import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'milkshake-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isRadiant: boolean = false;
  title = 'my snippets bring all the boys to the yard';

  ngOnInit() {
    this.isRadiant = true;
    setTimeout(() => {
      this.isRadiant = false;
    }, 350);
  }
  
}
