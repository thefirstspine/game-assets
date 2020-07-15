import quickGameType from './games-types/quick.game-type';
import classicGameType from './games-types/classic.game-type';
import tournamentGameType from './games-types/tournament.game-type';
import fpeGameType from './games-types/fpe.game-type';
import { IGameType } from '@thefirstspine/types-rest';
import standardGameType from './games-types/standard.game-type';

export class GamesTypesLibrary {

  static all(): IGameType[] {
    const ret: IGameType[] = [
      classicGameType(),
      tournamentGameType(),
      fpeGameType(),
      standardGameType(),
      quickGameType(),
    ];
    return ret;
  }

  static find(id: string): IGameType|undefined {
    return this.all().find(e => e.id === id);
  }

}
