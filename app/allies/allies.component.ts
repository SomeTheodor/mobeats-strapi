import { Component, OnInit} from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.css']
})
export class AlliesComponent implements OnInit {
  public alli: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/allies?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.alli = respuesta.data;
      });
  }
}
