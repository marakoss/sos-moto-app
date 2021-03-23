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

    getActive (items: object) {
      let keys = Object.keys(items).filter(value => typeof value === 'string');
      let values = Object.values(items);

      return keys.filter((cur, i, a) => {
        if (values[i] === true) {
          return true;
        }
      }).map((cur,i, a) => {
        return NUMBERED_SERVICES.get(cur);
      });
    },

    getDisabled (items: object) {
      let keys = Object.keys(items).filter(value => typeof value === 'string');
      let values = Object.values(items);

      return keys.filter((cur, i, a) => {
        if (values[i] === false) {
          return true;
        }
      }).map((cur,i, a) => {
        return NUMBERED_SERVICES.get(cur);
      });
    },
  };