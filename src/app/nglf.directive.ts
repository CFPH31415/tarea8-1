import { Directive } from '@angular/core';

@Directive({
  selector: '[appNglf]'
})
export class NglfDirective {

  constructor() { }

  <div *ngIf="loginForm.usuario === usuario && loginForm.password === password; then success else error">
</div>

<ng-template #success>
  <p>Inicio de sesión exitoso</p>
</ng-template>

<ng-template #error>
  <p>Error en el inicio de sesión</p>
</ng-template>

}
