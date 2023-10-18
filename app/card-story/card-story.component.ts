import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-cardStory',
  templateUrl: './card-story.component.html',
  styleUrls: ['./card-story.component.css']
})
export class CardStoryComponent implements OnInit {
  public listaCard:any[] = [];
  @Input() datos: any[] = [];
  @Input() rangoMin: number = 0;
  @Input() rangoMax: number = 20;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
    
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/card-stories?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.listaCard = respuesta.data;
        console.log(this.listaCard); // Verifica el contenido completo del objeto
      });
  }
}
