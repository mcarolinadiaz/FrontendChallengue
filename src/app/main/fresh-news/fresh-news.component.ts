import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-news',
  templateUrl: './fresh-news.component.html',
  styleUrls: ['./fresh-news.component.scss']
})
export class FreshNewsComponent implements OnInit {

  freshNews: any = [];
  constructor() { }

  ngOnInit(): void {
    this.freshNews = this.getFreshNews();
  }

  getFreshNews(): any[] {
    this.freshNews = [
      {
        "title": "Chin chin por nuestra plata en el #hackforgood del cdec",
        "image": "src/assets/images/news-01.jpg",
        "more": ""
      },
      {
        "title": "Chin chin por nuestra plata en el #hackforgood del cdec",
        "image": "src/assets/images/news-02.jpg",
        "more": ""
      },
      {
        "title": "Dos alumnas de Brother crean la primera manifestación feminista en Twitch",
        "image": "src/assets/images/news-02.jpg",
        "more": ""
      },
      {
        "title": "#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MÁS FEO DEL MUNDO",
        "image": "",
        "more": ""
      },
      {
        "title": "Brother Presenta Pinta y Colorea: el ciclo con el mejor talento gráfico de Madrid",
        "image": "src/assets/images/news-03.jpg",
        "more": ""
      },
      {
        "title": "Somos la escuela con más finalistas en el Festival CDEC (otra vez ;) )",
        "image": "",
        "more": ""
      },
      {
        "title": "Las nuevas ideas llegan a correos gracias a los alumnos de Brother",
        "image": "",
        "more": ""
      },
      {
        "title": "Nueva representación del kingdom a cargo del ilustrador asis percales",
        "image": "",
        "more": ""
      }
    ];
    return this.freshNews;
  }





}
