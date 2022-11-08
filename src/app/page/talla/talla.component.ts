import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-talla',
  templateUrl: './talla.component.html',
  styleUrls: ['./talla.component.css']
})
export class TallaComponent implements OnInit {

  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
  }

}
