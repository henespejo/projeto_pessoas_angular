import { Injectable, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons: Person[] = [
    {
      "id": 1,
      "nome": "Alice Silva",
      "perfil": "Administrador",
      "idade": 30,
      "email": "alice.silva@example.com",
      "ativo": true,
      "pais": "Brasil",
      "nivelExperiencia": "Sênior"
    },
    {
      "id": 2,
      "nome": "Bruno Souza",
      "perfil": "Usuário",
      "idade": 25,
      "email": "bruno.souza@example.com",
      "ativo": true,
      "pais": "Brasil",
      "nivelExperiencia": "Júnior"
    },
    {
      "id": 3,
      "nome": "Carlos Pereira",
      "perfil": "Usuário",
      "idade": 28,
      "email": "carlos.pereira@example.com",
      "ativo": true,
      "pais": "Portugal",
      "nivelExperiencia": "Pleno"
    },
    {
      "id": 4,
      "nome": "Daniela Costa",
      "perfil": "Administrador",
      "idade": 35,
      "email": "daniela.costa@example.com",
      "ativo": false,
      "pais": "Brasil",
      "nivelExperiencia": "Sênior"
    },
    {
      "id": 5,
      "nome": "Eduardo Lima",
      "perfil": "Usuário",
      "idade": 22,
      "email": "eduardo.lima@example.com",
      "ativo": true,
      "pais": "Brasil",
      "nivelExperiencia": "Júnior"
    },
    {
      "id": 6,
      "nome": "Fernanda Alves",
      "perfil": "Usuário",
      "idade": 29,
      "email": "fernanda.alves@example.com",
      "ativo": true,
      "pais": "Brasil",
      "nivelExperiencia": "Pleno"
    },
    {
      "id": 7,
      "nome": "Gabriel Fernandes",
      "perfil": "Administrador",
      "idade": 32,
      "email": "gabriel.fernandes@example.com",
      "ativo": true,
      "pais": "Brasil",
      "nivelExperiencia": "Sênior"
    },
  ];

  constructor(private http: HttpClient) { 
    
  }

  getList() : Person[] {
    return this.persons;
  }

  findById(id: number) {
    return this.getList().find(p => p.id === id);
  }

  delete(id: number): Person[] {
    this.persons = this.persons.filter(p => p.id !== id);
    return this.persons;
  }

  insert(person: Person): void {
    person.id = this.persons[this.persons.length - 1].id + 1;
    this.persons.push(person);
  }

  update(id: number, person: Person): void {
    this.persons = this.persons.map(p => {
      if (id === p.id) {
        return {
          id: person.id,
          nome: person.nome,
          perfil: person.perfil,
          idade: person.idade,
          email: person.email,
          ativo: person.ativo,
          pais: person.pais,
          nivelExperiencia: person.nivelExperiencia
        };
      }
      return p;
    });
  }

}
