import { IGameType } from '../../@shared/rest-shared/entities';

// tslint:disable: max-line-length
export default function(): IGameType {
  const fpeGameType: IGameType = {
    id: 'fpe',
    name: {
      fr: ``,
      en: ``,
    },
    description: {
      fr: ``,
      en: ``,
    },
    matchmakingMode: 'asap',
    destinies: ['hunter'],
    origins: [],
    players: [
      { x: 3, y: 0 },
    ],
    loots: {
      victory: [
      ],
      defeat: [
      ],
    },
    space: {
      minX: 0,
      minY: 0,
      maxX: 6,
      maxY: 6,
    },
  };

  return fpeGameType;
}
