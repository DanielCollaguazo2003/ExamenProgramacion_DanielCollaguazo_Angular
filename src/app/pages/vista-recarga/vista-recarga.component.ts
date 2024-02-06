import { Component } from '@angular/core';
import { Recarga } from '../../domain/recarga';
import { RecargaService } from '../../services/recarga.service';

@Component({
  selector: 'app-vista-recarga',
  templateUrl: './vista-recarga.component.html',
  styleUrls: ['./vista-recarga.component.scss']
})
export class VistaRecargaComponent {
  recarga: Recarga = new Recarga();

  constructor(private _recarga :RecargaService) {

  }

  generarRecarga() {
    this._recarga.saveRecarga(this.recarga).subscribe(data => {
      console.log(data);
      if (data.codigo == 1)
        alert("La recarga: " + this.recarga + "Se ingreso con exito")
      else
        alert("no se pudo ingresar Por los motivos: " + data.mensaje);
    })
  }
}
