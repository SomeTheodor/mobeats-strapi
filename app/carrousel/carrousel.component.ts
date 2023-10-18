import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: false, showIndicators: true } }
  ]
})
export class CarrouselComponent implements OnInit {
  listaPersonal: any[] = []; // Assuming you have defined the type for listaCard.
  constructor(private restService:RestService){}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/personals?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta in the console
        this.listaPersonal = respuesta.data;
        console.log(this.listaPersonal);
      });
  }
}
