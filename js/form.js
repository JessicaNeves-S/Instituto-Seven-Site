export function validarForm(formId) {
    const form = document.getElementById(formId);

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const cpf = form.cpf.value.trim();
        const telefone = form.telefone.value.trim();
        const cep = form.cep.value.trim();
        const cidade = form.cidade.value.trim();
        const estado = form.estado.value;

        if (!nome || !email || !cpf || !telefone || !cep || !cidade || !estado) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const cepRegex = /^\d{5}-\d{3}$/;
        const telRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

        if (!emailRegex.test(email)) { alert("Email inválido!"); return; }
        if (!cpfRegex.test(cpf)) { alert("CPF inválido!"); return; }
        if (!cepRegex.test(cep)) { alert("CEP inválido!"); return; }
        if (!telRegex.test(telefone)) { alert("Telefone inválido!"); return; }

        alert("Cadastro enviado com sucesso!");
        form.reset();
    });
}
