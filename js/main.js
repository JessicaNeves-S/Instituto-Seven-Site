import { carregarPagina } from './dom.js';
import { validarForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const page = document.body.dataset.page;
    carregarPagina(page);
    
    validarForm('formCadastro'); 
});
