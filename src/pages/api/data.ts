import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    nimgProjeto: String;
    nomeProjeto: String;
    textProjeto: String;
    hrefProjeto: String;
    hrefGitHub: String;
    tecProjeto1: String;
    tecProjeto2: String;
    tecProjeto3: String;
    tecProjeto4: String;
};

const projetos = [
    {
        nomeProjeto: 'Api SpringBoot',
        imgProjeto: '/Api.png',
        textProjeto:
            'Api Rest completa feita em java o spring boot. Inplementamos Cadastro, edição e exclusão de dados, com integração ao banco h2 para teste, utilizando o jpa, spring security e ultilizando o design patterns dto e outros.',
        hrefProjeto: 'https://github.com/RiosBlack/ProjetoIntegrador',
        hrefGitHub: 'https://github.com/RiosBlack/ProjetoIntegrador',
        tecProjeto1: '/SpringBoot.svg',
        tecProjeto2: '/Java.svg',
        tecProjeto3: '/BancoDados.svg',
        tecProjeto4: '/SpringBoot.svg',
    },
    {
        nomeProjeto: 'Project Feed Whats Help',
        imgProjeto: '/ProjectFeedWhatsHelp.png',
        textProjeto:
            'É uma ferramenta de aviso de erros e ideias que tira um print da pagina e manda junto com um comentário para o banco de dados e envia um e-mail avisando que foi feito o envio para poder ser consultado pelo gestor posteriormente.',
        hrefProjeto:
            'https://project-feed-whats-help-mxhhsd5ab-riosblack.vercel.app/',
        hrefGitHub: 'https://github.com/RiosBlack/Project_Feed_Whats_Help',
        tecProjeto1: '/Javascript.svg',
        tecProjeto2: '/Typescript.png',
        tecProjeto3: '/Tailwind.svg',
        tecProjeto4: '/BancoDados.svg',
    },
    {
        nomeProjeto: 'LandingPage-UiUx-CocaCola',
        imgProjeto: '/LandingPageCocaCola.png',
        textProjeto:
            'Landing Page baseado em coceitos de UX e UI para apredizado de ferramentas como hover e componentes.',
        hrefProjeto: 'https://riosblack.github.io/LandingPage-UiUx-CocaCola/',
        hrefGitHub: 'https://github.com/RiosBlack/LandingPage-UiUx-CocaCola',
        tecProjeto1: '/Html5.png',
        tecProjeto2: '/Css.png',
        tecProjeto3: '/Html5.png',
        tecProjeto4: '/Css.png',
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(projetos);
}
