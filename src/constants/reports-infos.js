import paper from '../assets/papel-reciclavel.png';
import glass from '../assets/vidro-reciclavel.png';
import metal from '../assets/metal-reciclavel.png';
import plastic from '../assets/plastico-reciclavel.png';

export const REPORTS_INFOS = [
    {
        residue: 'Plástico',
        info: 'A reciclagem de plástico ajuda a reduzir a demanda por petróleo, economiza energia e reduz a quantidade de plástico em aterros sanitários',
        icon: plastic
    },
    {
        residue: 'Papel e papelão',
        info: 'A reciclagem de papel ajuda a economizar árvores, energia e água',
        icon: paper
    },
    {
        residue: 'Metal',
        info: 'A reciclagem de metais como alumínio e aço economiza energia e reduz as emissões de carbono',
        icon: metal
    },
    {
        residue: 'Vidro',
        info: 'A reciclagem de vidro economiza matérias-primas, energia e reduz a quantidade de vidro nos aterros sanitários',
        icon: glass
    }
]