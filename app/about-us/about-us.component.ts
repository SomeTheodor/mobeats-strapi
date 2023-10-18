import { Component, Input ,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = 'About Us - Mobeats';
  listaCard: any[] = []; // Assuming you have defined the type for listaCard.
  maps : any[] = [];
  @Input() claseEspecial: boolean = true;
  constructor(private titleService: Title, private restService: RestService) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/section-abouts?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta in the console
        this.listaCard = respuesta.data;
      });
      this.restService.get("http://localhost:1337/api/maps?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta in the console
        this.maps = respuesta.data;
      });
  }
}
