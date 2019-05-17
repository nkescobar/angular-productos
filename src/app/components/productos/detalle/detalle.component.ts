import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() producto: Producto;
  constructor() { }

  ngOnInit() {
  }

}
