import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public autenticacao = {
    usuario: "",
    senha: ""
    }

  //NavController é responsável por gerenciar a navegabilidade
  constructor(public nav: NavController) { }

  abrirPagina(x: string) {
    if(this.autenticacao.usuario == "admin" && this.autenticacao.senha == "admin" ) {
      console.log("Você clicou no botão");
      this.nav.navigateForward(x);
    }else(
      this.nav.navigateForward(x)
    )

  }

  ngOnInit() {
  }

}
