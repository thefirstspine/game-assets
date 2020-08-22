import { CyclesLibrary } from './cycles.library';
import { IShopItem } from '@thefirstspine/types-rest';
import fetch from 'node-fetch';

// tslint:disable: max-line-length
export class ShopItemsLibrary {

  static async all(): Promise<IShopItem[]> {
    // Get current events
    const result = await fetch(`${process.env.WEBSITE_URL}/event?where={"datetimeFrom":{"<":${Date.now()}},"datetimeTo":{">":${Date.now()}}}`);
    const jsonResult = await result.json();
    const events: string[] = jsonResult ? jsonResult.map((e: any) => e.type) : [];

    const shopItems: IShopItem[] = [
      {
        id: '250-shards',
        name: {
          fr: `250 éclats de mana`,
          en: `250 mana shards`,
        },
        description: {
          fr: `250 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 4h.`,
          en: `250 mana shards to add to your purse. You will also be entitled to a special pledge level during the crowdfunding campaign. Equivalent in playing time: approximately 4 hours.`,
        },
        categories: ['shards'],
        price: {
          num: 2.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 250},
        ],
      },
      {
        id: '500-shards',
        name: {
          fr: `500 éclats de mana`,
          en: `500 mana shards`,
        },
        description: {
          fr: `500 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 8h.`,
          en: `500 mana shards to add to your purse. You will also be entitled to a special pledge level during the crowdfunding campaign. Equivalent in playing time: approximately 8 hours.`,
        },
        categories: ['shards', 'featured'],
        price: {
          num: 4.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 500},
        ],
      },
      {
        id: '1000-shards',
        name: {
          fr: `1000 éclats de mana`,
          en: `1000 mana shards`,
        },
        description: {
          fr: `1000 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 16h.`,
          en: `1000 mana shards to add to your purse. You will also be entitled to a special pledge level during the crowdfunding campaign. Equivalent in playing time: approximately 16h.`,
        },
        categories: ['shards'],
        price: {
          num: 8.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 1000},
        ],
      },
      {
        id: '2000-shards',
        name: {
          fr: `2000 éclats de mana`,
          en: `2000 mana shards`,
        },
        description: {
          fr: `2000 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 32h.`,
          en: `2000 mana shards to add to your purse. You will also be entitled to a special pledge level during the crowdfunding campaign. Equivalent in playing time: approximately 32 hours.`,
        },
        categories: ['shards'],
        price: {
          num: 16.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 2000},
        ],
      },
    ];

    const index: number = CyclesLibrary.currentNum();
    if (events.includes('online:corsairs')) {
      // Add exchanges in featured & seasonial
      shopItems.push(
        {
          id: 'exchange-galleons',
          name: {
            fr: `Echange aux Corsaires`,
            en: `Exchange to Corsairs`,
          },
          description: {
            fr: `Echange 5 gallions d'or contre 10 éclats de mana.`,
            en: `Exchange 5 golden galleons for 10 shards of mana.`,
          },
          categories: ['seasonial', 'shards'],
          price: {
            num: 2,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'shard', num: 10},
          ],
          oneTimePurchase: false,
        },
        {
          id: 'cover-corsair',
          name: {
            fr: `Protège-cartes Corsaire`,
            en: `Corsaire sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie des Corsaires.`,
            en: `Unlocks the Corsair sleeve.`,
          },
          categories: ['seasonial', 'covers'],
          price: {
            num: 20,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'cover-corsair', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-corsair',
          name: {
            fr: `Style Corsaire`,
            en: `Corsair Style`,
          },
          description: {
            fr: `Débloque le style "Corsaire" sur toutes vos cartes pour leur donner un aspect sauvage.`,
            en: `Unlock the "Corsair" style on all your cards to give them a wild look.`,
          },
          categories: ['seasonial', 'styles'],
          price: {
            num: 40,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'style-corsair', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 0) {
      shopItems.push(
        {
          id: 'holo-soul-of-a-sacrified-hunter',
          name: {
            fr: `Âme d'un Chasseur Sacrifié holo`,
            en: `Soul of a Sacrified Hunter holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Âme d'un Chasseur Sacrifié.`,
            en: `Unlock the digital holographic version of Soul of a Sacrificed Hunter.`,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-soul-of-a-sacrified-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-hunter',
          name: {
            fr: `Chasseur holo`,
            en: `Hunter holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Chasseur`,
            en: `Unlock the digital holographic version of Hunter.`,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-nostalgy',
          name: {
            fr: `Style nostaglique`,
            en: `Nostalgic style`,
          },
          description: {
            fr: `Débloque le style "Nostalgique" sur toutes vos cartes et leur donne un air de prototype. Il s'agit du style du premier prototype présenté publiquement lors du Festival des Fous du Jeu 2015.`,
            en: `Unlock the "Nostalgic" style on all your cards and make them look like a prototype. This is the style of the first prototype presented publicly at the Festival des Fous du Jeu 2015.`,
          },
          categories: index === 0 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-nostalgy', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 1) {
      shopItems.push(
        {
          id: 'holo-deadly-viper',
          name: {
            fr: `Vipère Mortelle holo`,
            en: `Deadly Viper holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Vipère Mortelle.`,
            en: `Unlock the digital holographic version of Deadly Viper.`,
          },
          categories: index === 1 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-deadly-viper', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-summoner',
          name: {
            fr: `Invocateur holo`,
            en: `Summoner holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Invocateur`,
            en: `Unlocks the digital holographic version of Summoner`,
          },
          categories: index === 1 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-summoner', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-scales',
          name: {
            fr: `Style écailles`,
            en: `Scale style`,
          },
          description: {
            fr: `Débloque le style "Ecailles" sur toutes vos cartes et leur donne un aspect de Grand Ancien.`,
            en: `Unlocks the "Scales" style on all your cards and gives them a Great Ancient fashioned look`,
          },
          categories: index === 1 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-scales', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-hunter',
          name: {
            fr: `Protège-cartes Chasseur`,
            en: `Hunter sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie du Chasseur.`,
            en: `Unlocks the Hunter's sleeve.`,
          },
          categories: index === 0 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-summoner',
          name: {
            fr: `Protège-cartes Invocateur`,
            en: `Summoner sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie de l'Invocateur.`,
            en: `Unlocks the Summoner's card cover`,
          },
          categories: index === 1 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-summoner', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 2) {
      shopItems.push(
        {
          id: 'holo-shadows-banner',
          name: {
            fr: `Bannière des Ombres holo`,
            en: `Shadows Banner holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Bannière des Ombres.`,
            en: `Unlocks the digital holographic version of Shadows Banner.`,
          },
          categories: index === 2 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-shadows-banner', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-conjurer',
          name: {
            fr: `Illusionniste holo`,
            en: `Conjurer holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Illusionniste`,
            en: `Unlock the digital holographic version of Conjurer`,
          },
          categories: index === 2 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-conjurer', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-cartographer',
          name: {
            fr: `Style cartographe`,
            en: `Cartographer style`,
          },
          description: {
            fr: `Débloque le style "Cartographe" sur toutes vos cartes pour vous aider à vous repérer dans le ciel d'Exodia.`,
            en: `Unlock the "Cartographer" style on all your cards to help you find your way in the sky of Exodia.`,
          },
          categories: index === 2 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-cartographer', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-conjurer',
          name: {
            fr: `Protège-cartes Illusionniste`,
            en: `Conjurer sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie de l'Illusionniste.`,
            en: `Unlocks the Conjurer sleeve`,
          },
          categories: index === 2 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-conjurer', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 3) {
      shopItems.push(
        {
          id: 'holo-ether',
          name: {
            fr: `Ether holo`,
            en: `Ether holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Ether.`,
            en: `Unlocks the digital holographic version of Ether.`,
          },
          categories: index === 3 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-ether', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-sorcerer',
          name: {
            fr: `Prestidigitateur holo`,
            en: `Sorcerer holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Prestidigitateur`,
            en: `Unlock the digital holographic version of Sorcerer`,
          },
          categories: index === 3 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-sorcerer', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-ghostly',
          name: {
            fr: `Style Fantomatique`,
            en: `Ghostly style`,
          },
          description: {
            fr: `Débloque le style "Fantomatique" sur toutes vos cartes.`,
            en: `Unlock the "Ghostly" style on all your cards.`,
          },
          categories: index === 3 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-ghostly', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-sorcerer',
          name: {
            fr: `Protège-cartes Prestidigitateur`,
            en: `Sorcerer sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie du Prestidigitateur.`,
            en: `Unlocks the Sorcerer sleeve`,
          },
          categories: index === 3 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-sorcerer', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 4) {
      shopItems.push(
        {
          id: 'holo-barbers',
          name: {
            fr: `Barbelés holo`,
            en: `Barbed Wires holo`,
          },
          description: {
            fr: `Débloque la version holographique numérique de Barbelés.`,
            en: `Unlocks the digital holographic version of Barbed Wires.`,
          },
          categories: index === 4 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-barbers', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-sunlight',
          name: {
            fr: `Style Ensoleillé`,
            en: `Sunlight style`,
          },
          description: {
            fr: `Débloque le style "Ensoleillé" sur toutes vos cartes.`,
            en: `Unlock the "Sunlight" style on all your cards.`,
          },
          categories: index === 4 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-sunlight', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-barbers',
          name: {
            fr: `Protège-cartes Barbelés`,
            en: `Barbed Wires sleeve`,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie des Barbelés.`,
            en: `Unlocks the Barbed Wires sleeve`,
          },
          categories: index === 4 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-barbers', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    return shopItems;
  }

  static async find(id: string): Promise<IShopItem|undefined> {
    return (await this.all()).find(e => e.id === id);
  }

}
