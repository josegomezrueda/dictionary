import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PalabraEsp } from '../../../../gestion/esp/domain/palabra-esp';
import { PalabraIng } from '../../../../gestion/ing/domain/palabra-ing';

import { BuscadorComponent } from '../buscador/buscador.component';
import { ServicioPalabrasService } from '../../services/servicio-palabras.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-muestra-datos',
  templateUrl: './muestra-datos.component.html',
  styleUrls: ['./muestra-datos.component.scss']
})
export class MuestraDatosComponent implements OnInit {

  datosIng: PalabraIng[];
  datosEsp: PalabraEsp[];
  datoIng: PalabraIng;
  datoEsp: PalabraEsp;
  idioma:string;
  cerrar:string;
  editar:string;
  borrar:string;
  titulo:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    public dialogEditEs: MatDialogRef<BuscadorComponent>) { }

  ngOnInit(): void {
    this.getIdioma();
  }
  cerrarVentana() {
    this.dialogEditEs.close();
  }

  getIdioma(){
    if (localStorage.getItem('idioma')==='esp'){
      this.palabrasEspanol();
      this.idioma='esp';
      if (this.data.tipoAccion==='mostrarTodo'){
        this.datosEsp = this.data.palabrasRec;

      }else{
        this.datoEsp = this.data.palabraEsp;

      }
      
    }else if(localStorage.getItem('idioma')==='en'){
      this.palabrasIngles();
      this.idioma='en';
      if (this.data.tipoAccion==='mostrarTodo'){
        this.datosIng = this.data.palabrasRec;
      }else{
        this.datoIng = this.data.palabraIng;
      }
    }
  }
  public palabrasEspanol() {
    this.cerrar = 'Cerrar';
    this.editar = 'Editar';
    this.borrar = 'Borrar';
    this.titulo='Pulsa para redirigte a la pagina de borrar y editar';
  }
  public palabrasIngles() {
    this.cerrar = 'Close';
    this.editar = 'Edit';
    this.borrar = 'Delete';
    this.titulo='Push to redirect to delete and edit page';
  }

}