import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    usuario = 'Angular';
    password = '123456';
  
    loginForm = {
      usuario: '',
      password: ''
    }
  
    onSubmit() {
      // Compara los datos del formulario con los datos de la clase
      if (this.loginForm.usuario === this.usuario && this.loginForm.password === this.password) {
        // Si son iguales, muestra un mensaje de éxito
        console.log('Inicio de sesión exitoso');
      } else {
        // Si no son iguales, muestra un mensaje de error
        console.log('Error en el inicio de sesión');
      }
    }
  }
  
  


