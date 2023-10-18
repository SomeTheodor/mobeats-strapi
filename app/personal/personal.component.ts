import { Component, OnInit} from '@angular/core';
import { RestService } from '../service/rest.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
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

