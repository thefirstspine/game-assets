import { CyclesLibrary } from './cycles.library';
import { IShopItem } from 'src/@shared/rest-shared/entities';

// tslint:disable: max-line-length
export class ShopItemsLibrary {

  static all(): IShopItem[] {
    const shopItems: IShopItem[] = [
    ];

    const index: number = CyclesLibrary.currentNum();

    if (index >= 0) {
      shopItems.push(
        {
          id: 'holo-soul-of-a-sacrified-hunter',
          name: {
            fr: `Âme d'un Chasseur Sacrifié holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Âme d'un Chasseur Sacrifié. Cet article est également une récompense à la participation au tournois pendant le Cycle du Renouveau 2020.`,
            en: ``,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-soul-of-a-sacrified-hunter', num: 1},
          ],
        },
        {
          id: 'holo-hunter',
          name: {
            fr: `Chasseur holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Chasseur`,
            en: ``,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-hunter', num: 1},
          ],
        },
        {
          id: 'style-nostalgy',
          name: {
            fr: `Style nostaglique`,
            en: ``,
          },
          description: {
            fr: `Débloque le style "Nostalgique" sur toutes vos cartes et leur donne un air de prototype. Il s'agit du style du premier prototype présenté publiquement lors du Festival des Fous du Jeu 2015.`,
            en: ``,
          },
          categories: index === 0 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-nostalgy', num: 1},
          ],
        },
      );
    }

    return shopItems;
  }

  static find(id: string): IShopItem|undefined {
    return this.all().find(e => e.id === id);
  }

}
