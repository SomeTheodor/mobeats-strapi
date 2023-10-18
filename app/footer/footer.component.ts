import { Component, OnInit} from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer: any[] = [];
public maps: any[] = [];
public mainNav: any[] = [];
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/footers?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.footer = respuesta.data;
      });
      this.restService.get("http://localhost:1337/api/maps?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta in the console
        this.maps = respuesta.data;
      });
      this.restService.get("http://localhost:1337/api/menus")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        // Filtrar los elementos principales y el resto para el menú desplegable
        this.mainNav = respuesta.data.slice(0, 5); // Mostrar los primeros 2 elementos
    
      });
  }
}
