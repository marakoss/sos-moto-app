import { SERVICES, NUMBERED_SERVICES } from '@dictionaries/services';

/**
 * This transforms services enum
 * { item1, item2, ...}
 * to object
 * { item1: true, item2: true, ...}
*/
function transform (obj: object, defaultState: boolean = true) {
    return Object.values(obj).filter(value => typeof value === 'string').reduce((acc: any, cur, i) => {
        acc[cur] = defaultState;
        return acc;
    }, {});
}

export const filters = {
    items: transform(SERVICES),
    switch (Item: string) {
      this.items[Item] = (this.items[Item] === true) ? false : true;
      return this;
    },

    // TODO: Fix
    getActive (items: object) {
      return Object.keys(items).filter(value => typeof value === 'string').reduce((acc: any, cur, i, a) => {
        if (items[i] === true) {
          return NUMBERED_SERVICES[acc];
        }
    }, {});
    }
  };