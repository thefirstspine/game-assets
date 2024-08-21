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
import etherCard from './cards/ether.card';
import eternityGiftCard from './cards/eternity-gift.card';
import hunterSouvenirCard from './cards/hunter-souvenir.card';
import conjurerSouvenirCard from './cards/conjurer-souvenir.card';
import summonerSouvenirCard from './cards/summoner-souvenir.card';
import sorcererSouvenirCard from './cards/sorcerer-souvenir.card';
import curseOfMaraCard from './cards/curse-of-mara.card';
import burdenEarthCard from './cards/burden-earth';
import ditchCard from './cards/ditch';
import lavaCard from './cards/lava';
import waterCard from './cards/water';
import { ICard } from '@thefirstspine/types-game';
import conjurerCard from './cards/conjurer.card';
import sorcererCard from './cards/sorcerer.card';
import theWallCard from './cards/the-wall.card';
import shadowsBannerCard from './cards/shadows-banner.card';
import greatAncientEggCard from './cards/great-ancient-egg.card';
import juvenilegreatAncientCard from './cards/juvenile-great-ancient.card';
import greatAncientCard from './cards/great-ancient.card';
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
import fireCard from './cards/fire.card';
import achieveCard from './cards/achieve.card';
import cureCard from './cards/cure';
import guardianCard from './cards/guardian.card';
import caduceusCard from './cards/caduceus.card';
import theVoidCard from './cards/the-void.card';
import jellyfishCard from './cards/jellyfish.card';
import pocketVolcanoCard from './cards/pocket-volcano.card';
import goldenGalleonCard from './cards/golden-galleon.card';
import torturerCard from './cards/torturer.card';
import chimeraCard from './cards/chimera.card';
import painCard from './cards/pain';
import anvilOfXiarmhaCard from './cards/anvil-of-xiarmha';
import fleshHammerCard from './cards/flesh-hammer.card';
import reinforcementCard from './cards/reinforcement';
import bloodStrengthCard from './cards/blood-strenght.card';
import annihilationMattCard from './cards/annihilation-matt';
import trickOrTreatCard from './cards/trick-or-treat';
import iceStatueCard from './cards/ice-statue.card';
import frozenFoxCard from './cards/frozen-fox.card';
import frozenBansheeCard from './cards/frozen-banshee.card';
import frozenViperCard from './cards/frozen-viper.card';
import mutateFoxCard from './cards/mutate-fox.card';
import mutateBansheeCard from './cards/mutate-banshee.card';
import mutateTowerCard from './cards/mutate-tower.card';
import mutateBarbedWiresCard from './cards/mutate-barbed-wires.card';
import maraBansheeCard from './cards/mara-banshee.card';
import maraFoxCard from './cards/mara-fox.card';
import argentoBarbedWiresCard from './cards/argento-barbed-wires.card';
import argentoTowerCard from './cards/argento-tower.card';
import insaneRuinCard from './cards/insane-ruin';
import insanePutrefactionCard from './cards/insane-putrefaction';

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
    etherCard,
    fireCard,
    achieveCard,
    cureCard,
    guardianCard,
    caduceusCard,
    theVoidCard,
    jellyfishCard,
    pocketVolcanoCard,
    torturerCard,
    chimeraCard,
    painCard,
    reinforcementCard,
    anvilOfXiarmhaCard,
    fleshHammerCard,
    // Curse
    curseOfMaraCard,
    // Collection
    eternityGiftCard,
    hunterSouvenirCard,
    conjurerSouvenirCard,
    summonerSouvenirCard,
    sorcererSouvenirCard,
    greatAncientEggCard,
    juvenilegreatAncientCard,
    greatAncientCard,
    ovilCard,
    applicantCard,
    goldenGalleonCard,
    bloodStrengthCard,
    annihilationMattCard,
    trickOrTreatCard,
    iceStatueCard,
    frozenFoxCard,
    frozenBansheeCard,
    frozenViperCard,
    mutateFoxCard,
    mutateBansheeCard,
    mutateTowerCard,
    mutateBarbedWiresCard,
    maraBansheeCard,
    maraFoxCard,
    argentoBarbedWiresCard,
    argentoTowerCard,
    insaneRuinCard,
    insanePutrefactionCard,
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
