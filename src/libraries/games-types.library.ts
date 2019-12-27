import quickGameType from './games-types/quick.game-type';
import classicGameType from './games-types/classic.game-type';
import tournamentGameType from './games-types/tournament.game-type';
import { IGameType } from 'src/@shared/rest-shared/entities';

export class GamesTypesLibrary {

  static all(): IGameType[] {
    const ret: IGameType[] = [
      quickGameType,
    ];
    ret.push(classicGameType());
    ret.push(tournamentGameType());
    return ret;
  }

  static find(id: string): IGameType|undefined {
    return this.all().find(e => e.id === id);
  }

}
