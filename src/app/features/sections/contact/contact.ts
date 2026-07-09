import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  fb = inject(FormBuilder)

  form = this.fb.group({
    nombre: ["", Validators.required],
    email: ["", Validators.required],
    telefono: ["", Validators.required],
    mensaje: ["", Validators.required],
  })

  onSubmit(){}

}
