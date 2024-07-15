import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Location } from '@angular/common';
import { AsyncValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person: any = {};
  personForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private location: Location
  ) {
    this.personForm = this.formBuilder.group({
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: 0,
      email: ['', Validators.required],
      ativo: true,
      pais: ['', Validators.required],
      nivelExperiencia: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.person = {
      id: 0,
      name: "",
      perfil: "",
      idade: 0,
      email: "",
      ativo: true,
      pais: "",
      nivelExperiencia: ""
    };
  }

  save(): void {
    if(this.personForm.invalid) {
      this.validarCamposDoFormulario(this.personForm);
      return;
    }
    this.person = this.personForm.value;
    this.personService.insert(this.person);
    this.goBack();
  }

  validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control?.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validarCamposDoFormulario(control);
      }
    });
  }

  exibeErro(campo: string) {
    if(!this.personForm.get(campo)) {
      return false;
    }
    return this.personForm.get(campo)!.invalid && this.personForm.get(campo)!.touched;
  }

  goBack(): void {
    this.location.back();
  }
}
