import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mainNav: any[] = []; // Elementos principales del menú
  public dropdownNav: any[] = []; // Elementos para el menú desplegable

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/menus")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        // Filtrar los elementos principales y el resto para el menú desplegable
        this.mainNav = respuesta.data.slice(0, 5); // Mostrar los primeros 2 elementos
        this.dropdownNav = respuesta.data.slice(2); // Resto para el menú desplegable
      });
  }
}
