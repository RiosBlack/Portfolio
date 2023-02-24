import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    srcImg: string;
    altImg: string;
    title: string;
    nivel: string;
};

const hardSkills: any = [
    {
        srcImg: '/Javascript.svg',
        altImg: 'Logo Javascript',
        title: 'JavaScript',
        nivel: 'Intermediário',
    },
    {
        srcImg: '/Java.svg',
        altImg: 'Logo Java',
        title: 'Java',
        nivel: 'Intermediário',
    },
    {
        srcImg: '/React.svg',
        altImg: 'Logo React',
        title: 'React',
        nivel: 'Intermediário',
    },
    {
        srcImg: '/SpringBoot.svg',
        altImg: 'Logo Spring Boot',
        title: 'Spring Boot',
        nivel: 'Intermediário',
    },
    {
        srcImg: '/Tailwind.svg',
        altImg: 'Logo Tailwind',
        title: 'Tailwind',
        nivel: 'Avançado',
    },
    {
        srcImg: '/BancoDados.svg',
        altImg: 'Logo Banco de Dados',
        title: 'Banco Dados',
        nivel: 'Iniciante',
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(hardSkills);
}
