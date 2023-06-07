# Aprendendo 'typescript'


> Programa Desenvolve e Alura <br>
O programa desenvolve é um programa gratuito de formação e inclusão de talentos em tecnologia do Grupo Boticário. Em parceria com o Alura Include, as aulas são realizadas online pela plataforma. O curso tem duração de 6 meses e estou participando da trilha de formação Full Stack.

<br>

## Conteúdo

- [O projeto](#o-projeto)
   - [Curso 1](#o-que-foi-aprendido--curso-1)
   - [Curso 2](#o-que-foi-aprendido--curso-2)

## O Projeto
Nesse repositório coloco as aulas que estou acompanhando de typescript, aprendido junto ao Programa Desenvolve. Serão 4 cursos sobre a linguagem, todos acompanhando o mesmo projeto.

### O que foi aprendido | Curso 1
Na primeira parte do curso foi possível aprender i básico de typescript e qual sua relação com javascript. Foi aprendido a separar as pastas e quais sua funcionalidades dentro do código. Também foi possível entender que o typescript acaba facilitanto o desenvolvimento do código, pois ele indica os possíveis erros de digitação dentro da própria semântica do código, além de também evitar a compilação do código para 'traduzir' para o javascript caso haja algum erro. Dessa forma fica mais fácil evitar erros diretamente no desenvolvimento do código.

Também foi possível aprender como manipular o DOM através da linguagem e imprimir na tela através do template string:

>template(model: Negociacoes): string {
      return `
      <table class="table table-hover table-bordered">
         <thead>
            <tr>
               <th>DATA</th>
               <th>QUANTIDADE</th>
               <th>VALOR</th>
            </tr>
         </thead>
         <tbody>
            ${model.lista().map(negociacao => {
         return `
                  <tr>
                     <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                     <td>${negociacao.quantidade}</td>
                     <td>${negociacao.valor}</td>
                  </tr>
               `
      }).join('')}
         </tbody>
      </table>
    `
   }

   <br>

   ### O que foi aprendido | Curso 2