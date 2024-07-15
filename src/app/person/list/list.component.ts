import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.persons = this.personService.getList();
  }

  irParaEditar(id: number) {
    this.router.navigate([`persons/edit/${id}`]);
  }

  cadastrar() {
    this.router.navigate(["persons/new"]);
  }

  remover(id: number): void {
    this.persons = this.personService.delete(id);
  }
}
