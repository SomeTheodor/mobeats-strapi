import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  public testimonios: any[] = [];
  public card_testimonial: any [] = [];
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/testimonials?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.testimonios = respuesta.data;
      });
        this.restService.get("http://localhost:1337/api/card-testimonials?populate=*")
          .subscribe(respuesta => {
            console.log(respuesta); // Verifica la respuesta en la consola
            this.card_testimonial = respuesta.data;
          });
  }
}
