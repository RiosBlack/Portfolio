import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    srcImg: string;
    altImg: string;
    title: string;
    nivel: string;
};
//dedicado - responsável - pró ativo - persistente - comunicativo - capacidade de liderança - determinado - criativo
const softSkills = [
    {
        srcImg: '/Dedicado.png',
        altImg: 'Logo Dedicado',
        title: 'Dedicado',
        nivel: '-',
    },
    {
        srcImg: '/Responsavel.png',
        altImg: 'Logo Resposável',
        title: 'Responsável',
        nivel: '-',
    },
    {
        srcImg: '/ProAtivo.png',
        altImg: 'Logo Pro Ativo',
        title: 'Pró Ativo',
        nivel: '-',
    },
    {
        srcImg: '/Persistente.png',
        altImg: 'Logo Persistente',
        title: 'Persistente',
        nivel: '-',
    },
    {
        srcImg: '/Comunicativo.png',
        altImg: 'Logo Comunicativo',
        title: 'Comunicativo',
        nivel: '-',
    },
    {
        srcImg: '/Lideranca.png',
        altImg: 'Logo Lideranca',
        title: 'Liderança',
        nivel: '-',
    },
    {
        srcImg: '/Determinacao.png',
        altImg: 'Logo Determinado',
        title: 'Determinado',
        nivel: '-',
    },
    {
        srcImg: '/Criativo.png',
        altImg: 'Logo Criativo',
        title: 'Criativo',
        nivel: '-',
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(softSkills);
}
