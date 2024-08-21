import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const soulOfASacrifiedHunterCard: ICard = {
  id: `soul-of-a-sacrified-hunter`,
  text: {
    en: `This card wins {life}1{/life} for each {creature}creature{/creature} in your discard and {strength}1{/strength} on all sides for each {artifact}artifact{/artifact} in your discard when placed on the game board.`,
    fr: `Cette carte gagne {life}1{/life} pour chaque {creature}créature{/creature} dans votre défausse et {strength}1{/strength} sur tous ses côtés pour chaque {artifact}artéfact{/artifact} dans votre défausse lorsqu'elle est posée sur le plateau de jeu.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/soul-of-a-sacrified-hunter.png`,
  name: {
    en: `Soul of a Sacrified Hunter`,
    fr: `Âme d'un Chasseur Sacrifié`,
  },
  stats: {
    effects: ['soul-of-a-sacrified-hunter'],
    life: 0,
    bottom: {
      defense: 1,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 0,
    },
    right: {
      defense: 1,
      strength: 0,
    },
    top: {
      defense: 1,
      strength: 0,
    },
  },
  type: 'creature',
};

export default soulOfASacrifiedHunterCard;
