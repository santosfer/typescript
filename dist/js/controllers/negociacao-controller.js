import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inpuData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao;
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inpuData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inpuData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inpuData.focus();
    }
}