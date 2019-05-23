import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.formGroup = this.formBuilder.group({
      codigo: [null, [Validators.required]],
      nombre: [null, [Validators.required, Validators.maxLength(30)]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      disponible: [null]
    });
  }

  get nombre() { return this.formGroup.get('nombre'); }
  get f() { return this.formGroup.controls; }

  onSubmit() {
    console.log('formValid', this.formGroup.valid);
    if (this.formGroup.valid) {
    }
  }



}
