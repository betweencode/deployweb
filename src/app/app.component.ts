import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo:string ="";
  title = 'desplegar';

  public arreglo:Array<string> = [];

  public agregarTitulo(){
      this.arreglo.push(this.titulo);
      this.titulo = "";
  }
}
