import theTowerCard from './cards/the-tower.card';
import deadlyViperCard from './cards/deadly-viper.card';
import summonerCard from './cards/summoner.card';
import hunterCard from './cards/hunter.card';
import thunderCard from './cards/thunder.card';
import putrefactionCard from './cards/putrefaction';
import ruinCard from './cards/ruin';
import healCard from './cards/heal';
import reconstructCard from './cards/reconstruct';
import replacementCard from './cards/replacement.card';
import smokyTotemCard from './cards/smoky-totem.card';
import barbersCard from './cards/barbers.card';
import gargoyleCard from './cards/gargoyle.card';
import bansheeCard from './cards/banshee.card';
import theFoxCard from './cards/the-fox.card';
import veneniagoraCard from './cards/veneniagora.card';
import soulOfASacrifiedHunterCard from './cards/soul-of-a-sacrified-hunter.card';
import etherCard from './cards/ether';
import eternityGiftCard from './cards/eternity-gift.card';
import hunterSouvenirCard from './cards/hunter-souvenir.card';
import conjurerSouvenirCard from './cards/conjurer-souvenir.card';
import summonerSouvenirCard from './cards/summoner-souvenir.card';
import sorcererSouvenirCard from './cards/sorcerer-souvenir.card';
import snowMansPresentCard from './cards/snow-man-s-present';
import curseOfMaraCard from './cards/curse-of-mara.card';
import burdenEarthCard from './cards/burden-earth';
import ditchCard from './cards/ditch';
import lavaCard from './cards/lava';
import waterCard from './cards/water';
import { ICard } from '../@shared/rest-shared/card';
import conjurerCard from './cards/conjurer.card';
import sorcererCard from './cards/sorcerer.card';
import theWallCard from './cards/the-wall.card';
import shadowsBannerCard from './cards/shadows-banner.card';
import greatOldEggCard from './cards/great-old-egg.card';
import juvenileGreatOldCard from './cards/juvenile-great-old.card';
import greatOldCard from './cards/great-old.card';
import insanesRunCard from './cards/insanes-run.card';
import growingOakCard from './cards/growing-oak.card';
import monstrousPortalCard from './cards/monstrous-portal.card';
import jesterCard from './cards/jester.card';
import paladinOfTheNinthDesertCard from './cards/paladin-of-the-ninth-desert.card';
import volkhaCard from './cards/volkha.card';
import ovilCard from './cards/ovil.card';
import applicantCard from './cards/applicant.card';
import insanesEchoCard from './cards/insanes-echo.card';
import alterTheFateCard from './cards/alter-the-fate.card';

export class CardsLibrary {

  static readonly cards: ICard[] = [
    // Playable cards
    theTowerCard,
    deadlyViperCard,
    summonerCard,
    hunterCard,
    thunderCard,
    putrefactionCard,
    ruinCard,
    healCard,
    reconstructCard,
    replacementCard,
    smokyTotemCard,
    barbersCard,
    gargoyleCard,
    bansheeCard,
    theFoxCard,
    veneniagoraCard,
    soulOfASacrifiedHunterCard,
    etherCard,
    conjurerCard,
    sorcererCard,
    theWallCard,
    shadowsBannerCard,
    insanesRunCard,
    growingOakCard,
    monstrousPortalCard,
    jesterCard,
    paladinOfTheNinthDesertCard,
    volkhaCard,
    insanesEchoCard,
    alterTheFateCard,
    // Curse
    curseOfMaraCard,
    // Collection
    eternityGiftCard,
    hunterSouvenirCard,
    conjurerSouvenirCard,
    summonerSouvenirCard,
    sorcererSouvenirCard,
    snowMansPresentCard,
    greatOldEggCard,
    juvenileGreatOldCard,
    greatOldCard,
    ovilCard,
    applicantCard,
    // Squares
    burdenEarthCard,
    ditchCard,
    lavaCard,
    waterCard,
  ];

  static find(id: string): ICard|undefined {
    return this.cards.find(e => e.id === id);
  }

}
