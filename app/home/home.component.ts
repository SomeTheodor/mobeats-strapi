import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public section: any[] = [];
  cardWorkCounter = 0; // Contador para controlar la cantidad de app-card-work a mostrar
  maxCardWorksToShow = 3;
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/sections?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.section = respuesta.data;
      });
  }
}

