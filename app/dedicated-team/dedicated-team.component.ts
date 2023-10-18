import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-dedicated-team',
  templateUrl: './dedicated-team.component.html',
  styleUrls: ['./dedicated-team.component.css']
})
export class DedicatedTeamComponent implements OnInit {
  public hacemos: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/section-hacemos?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.hacemos = respuesta.data;
      });
  }
}
