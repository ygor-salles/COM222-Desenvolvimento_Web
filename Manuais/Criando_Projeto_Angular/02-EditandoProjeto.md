1 - Para deixar com que cada componente tenha seus arquivos HTML CSS e TS separado deve:
no arquivo angular.json, nos atributos "inlineTemplate" e "inlineStyle" mudar de true para false

2 - Definições de diretórios:
Envoiroment-> pasta que define as variaveis de ambiente
Assets -> para arquivos estáticos imagens, fontes 
App - > que foi criado pelo primeiro componet
src -> pasta onde serão criados outros componentes
index.html -> single page, basicamente aponta para o componente raiz, app.component.ts. Ou seja a aplicação
começa em index.html e aponta para o component raiz onde terá todas as ligações com outros componentes 

3 - Para criar o app.component.html raiz deve apagar a linha template e a linha styles[]. E inserir a linha:
templateUrl: 'app.component.html'  dentro de @Component. Isso é realizado em app.component.ts
Toda a variavel que for criada em exports class component poderá ser utilizado no html com {{}}

4 - INSTALANDO A DEPENDENCIA DO MATERIAL DESIGN:
Parar a aplicação: ctrl+c no terminal, executar o comando:
ng add @angular/material
Escolher o template basta verificar a url no browser
y
y