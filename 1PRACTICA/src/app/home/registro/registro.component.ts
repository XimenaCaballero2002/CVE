import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  loginForm:FormGroup
  mensaje='tu nombre'
  //loginForm=new FormControl ('');
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email], [Validators.pattern('[a-z0-9]+@tese.edu.mx')]],
      password: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(8)]],
      nombre: ['',[Validators.pattern('[A-Za-z0-9]+')] ],
      apellidop: [''],
      apellidom: ['']
    });
   }

  ngOnInit() {}
  prueba(){
    console.log(this.loginForm.value);
    this.mensaje = "Datos registrados"
  }

  validar(){
    if 
      (this.loginForm.get('password')?.valid) {
        this.mensaje = this.loginForm.get('password')?.value;
      console.log(this.mensaje);
  }
    else
      if (this.loginForm.get('password')?.hasError('required'))
        {
          this.mensaje = "El password es requerido";
        }
        {
          if (this.loginForm.get('password')?.hasError('minlength'))
            {
              this.mensaje = "El password debe tener al menos 3 caracteres";
            }
        }

  }    
}

