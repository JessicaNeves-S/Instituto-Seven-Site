export function carregarPagina(pagina) {
    const conteudo = document.querySelector('main');

    switch (pagina) {
        case 'index':
            conteudo.innerHTML = `
                <section class="sobre">
                    <h2>Quem Somos</h2>
                    <div class="sobre-container">
                        <div class="sobre-texto">
                            <p>
                                Somos a Seven, uma organização sem fins lucrativos que acredita que o bem-estar verdadeiro vai além da ausência de problemas. Ele nasce do equilíbrio entre corpo, mente, emoções, propósitos e relações saudáveis.
                            </p>
                        </div>
                        <figure class="sobre-imagem">
                            <img src="./imagens/equipe.jpg" alt="Equipe da ONG Seven" />
                            <figcaption>Nossa equipe comprometida com a transformação social.</figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <h2>Missão, Visão e Valores</h2>
                    <ul>
                        <li><strong>Missão:</strong> Promover o bem-estar e o desenvolvimento integral das pessoas, unindo saúde, propósito, relações saudáveis, equilíbrio financeiro e realização pessoal.</li>
                        <li><strong>Visão:</strong> Ser uma referência em transformação social por meio do cuidado com o ser humano em todas as suas dimensões.</li>
                        <li><strong>Valores:</strong> Respeito à diversidade, cuidado integral, transparência, inclusão, autonomia e cooperação.</li>
                    </ul>
                </section>
                <section>
                    <h2>Contato</h2>
                    <address>
                        Rua das Nações, 12345 – São Paulo, SP<br />
                        Telefone: (11) 98765-4321<br />
                        E-mail: <a href="mailto:contato@ongseven.org.br">contato@ongseven.org.br</a><br />
                        Redes sociais:
                        <a href="#" aria-label="Facebook da ONG Seven">Facebook</a> |
                        <a href="#" aria-label="Instagram da ONG Seven">Instagram</a>
                    </address>
                </section>
            `;
            break;

        case 'projetos':
            conteudo.innerHTML = `
                <section>
                    <h2>Projetos em Andamento</h2>
                    ${criarCardProjeto("Projeto Equilíbrio em Movimento", "Promover saúde física e mental por meio de práticas integrativas, autocuidado e bem-estar emocional.", "./imagens/Alunos-conversa.jpeg", "Roda de conversa sobre saúde mental, autoconsciência e prevenção do burnout.")}
                    ${criarCardProjeto("Meu Propósito, Meu Futuro", "Apoiar jovens e adultos na descoberta de propósito, no desenvolvimento de habilidades e na conquista de autonomia financeira e realização profissional.", "./imagens/alunos-oficina.jpg", "Oficinas de currículo, entrevista e empregabilidade.")}
                </section>
                <section>
                    <h2>Voluntariado</h2>
                    <p>Participe de nossos projetos como voluntário. Cadastre-se em <a href="cadastro.html">nossa página</a> e faça parte da mudança!</p>
                </section>
                <section>
                    <h2>Doações</h2>
                    <p>Ajude a manter nossos projetos com uma doação.</p>
                </section>
            `;
            break;

        case 'cadastro':
            
            window.location.href = "cadastro.html";
            break;

        default:
            conteudo.innerHTML = `<h2>Página não encontrada</h2>`;
    }
}

export function criarCardProjeto(titulo, descricao, imgSrc, figcaption) {
    return `
        <article>
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <figure>
                <img src="${imgSrc}" alt="${titulo}" width="500">
                <figcaption>${figcaption}</figcaption>
            </figure>
        </article>
    `;
}
