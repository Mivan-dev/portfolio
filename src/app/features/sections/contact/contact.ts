import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  enviado = signal(false);
  error = signal(false);
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    mensaje: ['',  [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    this.http.post('https://formspree.io/f/xlgqeybg', this.form.value).subscribe({
      next: () => {
        this.enviado.set(true);
        this.error.set(false);
        this.form.reset();
      },
      error: (err) => {
        this.error.set(true);
        this.enviado.set(false);
        console.error('Error al enviar', err);
      },
    });
  }
}
