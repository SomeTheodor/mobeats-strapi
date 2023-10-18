import { Component, Input ,OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-card-work',
  templateUrl: './card-work.component.html',
  styleUrls: ['./card-work.component.css']
})
export class CardWorkComponent implements OnInit {
  public listaWork: any[] = [];
  @Input() datos: any[] = [];
  @Input() rangoMin: number = 0;
  @Input() rangoMax: number = 0;
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/card-works?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.listaWork = respuesta.data;
      });
  }
}
