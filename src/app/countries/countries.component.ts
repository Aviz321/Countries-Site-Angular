import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  cData: any;
  searchText:string="";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://restcountries.com/v3.1/all").subscribe(d => this.cData = d);

  }


}
