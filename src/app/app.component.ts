import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  correcto: boolean = false;
  incorrecto: boolean = false;
  user = '';
  pass = '';
  usuario: string = 'Carlos';
  password: string = '123456';

  verificarDatos() {
    if (this.user === this.usuario && this.pass === this.password) {
      this.correcto = true;
      this.incorrecto = false;
    } else {
      this.incorrecto = true;
      this.correcto = false;
    }

  }
}

