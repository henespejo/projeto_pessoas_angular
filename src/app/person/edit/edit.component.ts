import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  personForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const person = this.personService.findById(id);
    this.personForm = this.formBuilder.group({
      id: [person?.id, null],
      nome: [person?.nome, Validators.required],
      perfil: [person?.perfil, Validators.required],
      idade: [person?.idade, null],
      email: [person?.email, Validators.required],
      ativo: [person?.ativo, null],
      pais: [person?.pais, Validators.required],
      nivelExperiencia: [person?.nivelExperiencia, Validators.required]
    });
  }

  save(): void {
    if(this.personForm.invalid) {
      this.validarCamposDoFormulario(this.personForm);
      return;
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const person: Person = this.personForm.value;
    this.personService.update(id, person);
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
