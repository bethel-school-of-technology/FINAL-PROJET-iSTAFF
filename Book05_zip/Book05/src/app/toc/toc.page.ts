import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TOCPage implements OnInit {
    public chapters = [
      {title: "Chapter 1", url: "/chapter1"},
      
    ];


  constructor() { }

  ngOnInit() {
  }

}
