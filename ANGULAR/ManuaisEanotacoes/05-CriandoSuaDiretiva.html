*CRIANDO SUA PRÓPRIA DIRETIVA NA APLICAÇÃO:

1 - DIRETIVAS DE ATRIBUTO CSS:
*Neste exemplo iremos adicionar um novo diretório para os componentes diretivas, atente-se que o comando
utiliza d ao inves de c:
ng g d directives/red

Note que foi criado apenas um arquivo .ts pois é uma diretiva. Em red.directive.ts adicionar o elemento, css nesse caso:
@Directive({
    selector: '[appRed]'
})
export class RedDirective {
    constructor(private el: ElementRef) { 
        el.nativeElement.style.color = '#e35e6b'
    }
}

para usar essa diretiva CSS basta colocar o selector no seu componente html, que nesse caso o seletor é appRed

--------------------------------------------------------------------------------------------------------------------

2 - DIRETIVA ESTRUTURAL FOR:
*executar o comando:
ng g d directives/for

Mudado o nome do selector de 'appFor' para 'myFor'
*A partir do momento que foi criado o for.directives.ts para utilizar uma estrutura de for será necessário:
1 - implmentar o ciclo de vida de inicialização. 
2 - Após isso criar o método para iniciar ngOnInit pois será gerado um novo elemento HTML, definir um Input('myForEm').
O 'em' será a variavel que percorrerá o for.
3 - implmentar isso no HTML, *myFor="let n em [1, 2, 3]" 
4 - Para que o valor de N seja visualizado deve-se definir os paramaetro necessário para o construtor e criar o laço for em ngOnInit:

for.directives.ts:
import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit : number })
    }
  }

}

algum HTML, home.component.html por exemplo:
<ul>
    <li *myFor="let n em [1, 2, 3]">{{ n }}</li>
</ul>

