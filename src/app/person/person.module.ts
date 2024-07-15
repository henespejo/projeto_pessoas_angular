import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonService } from './services/person.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonService]
})
export class PersonModule { }
