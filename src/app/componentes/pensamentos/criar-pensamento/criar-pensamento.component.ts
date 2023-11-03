import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {


  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(private service: PensamentoService){}
 
  criarPensamento() {
    this.service.criarPensamento(this.pensamento).subscribe()
}



  cancelarPensamento(){
    alert("Ação cancelada");
  }
}
