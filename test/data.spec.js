import { general_fire, general_grass, general_water, general_bug, general_normal,general_poison, general_flying, general_electric, 
  general_ground, general_fighting, general_psychic, general_rock, general_ghost, general_dragon, general_fairy,
  general_dark, general_steel, general_ice} from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js';

const infoGeneral = data.pokemon;

describe('general fire', () => {
  it('is a function', () => {
    expect(typeof general_fire).toBe('function');
  });

  it('returns `length items 20`', () => {
    expect(infoGeneral.filter(general_fire).length).toBe(20);
  });

  it('returns `name pokemon position type fire`', () => {
    expect(infoGeneral.filter(general_fire)[3].name).toBe("vulpix");
  });

});

describe('general grass', () => {
  it('is a function', () => {
    expect(typeof general_grass).toBe('function');
  });

  it('returns `length items 21`', () => {
    expect(infoGeneral.filter(general_grass).length).toBe(21);
  });

  it('returns `name pokemon position type grass`', () => {
    expect(infoGeneral.filter(general_grass)[7].name).toBe("weepinbell");
  });

});

describe('general water', () => {
  it('is a function', () => {
    expect(typeof general_water).toBe('function');
  });

  it('returns `length items 46`', () => {
    expect(infoGeneral.filter(general_water).length).toBe(46);
  });

  it('returns `name pokemon position type water`', () => {
    expect(infoGeneral.filter(general_water)[12].name).toBe("seel");
  });

});

describe('general bug', () => {
  it('is a function', () => {
    expect(typeof general_bug).toBe('function');
  });

  it('returns `length items 22`', () => {
    expect(infoGeneral.filter(general_bug).length).toBe(22);
  });

  it('returns `name pokemon position type bug`', () => {
    expect(infoGeneral.filter(general_bug)[4].name).toBe("kakuna");
  });

});

describe('general normal', () => {
  it('is a function', () => {
    expect(typeof general_normal).toBe('function');
  });

  it('returns `length items 39`', () => {
    expect(infoGeneral.filter(general_normal).length).toBe(39);
  });

  it('returns `name pokemon position type normal`', () => {
    expect(infoGeneral.filter(general_normal)[33].name).toBe("ursaring");
  });

});

describe('general poison', () => {
  it('is a function', () => {
    expect(typeof general_poison).toBe('function');
  });

  it('returns `length items 15`', () => {
    expect(infoGeneral.filter(general_poison).length).toBe(15);
  });

  it('returns `name pokemon position type poison`', () => {
    expect(infoGeneral.filter(general_poison)[8].name).toBe("zubat");
  });

});

describe('general flying', () => {
  it('is a function', () => {
    expect(typeof general_flying).toBe('function');
  });

  it('returns `length items 38`', () => {
    expect(infoGeneral.filter(general_flying).length).toBe(38);
  });

  it('returns `name pokemon position type flying`', () => {
    expect(infoGeneral.filter(general_flying)[37].name).toBe("ho-oh");
  });

});

describe('general electric', () => {
  it('is a function', () => {
    expect(typeof general_electric).toBe('function');
  });

  it('returns `length items 15`', () => {
    expect(infoGeneral.filter(general_electric).length).toBe(15);
  });

  it('returns `name pokemon position type electric`', () => {
    expect(infoGeneral.filter(general_electric)[0].name).toBe("pikachu");
  });

});

describe('general ground', () => {
  it('is a function', () => {
    expect(typeof general_ground).toBe('function');
  });

  it('returns `length items 11`', () => {
    expect(infoGeneral.filter(general_ground).length).toBe(11);
  });

  it('returns `name pokemon position type ground`', () => {
    expect(infoGeneral.filter(general_ground)[4].name).toBe("cubone");
  });

});

describe('general fighting', () => {
  it('is a function', () => {
    expect(typeof general_fighting).toBe('function');
  });

  it('returns `length items 9`', () => {
    expect(infoGeneral.filter(general_fighting).length).toBe(9);
  });

  it('returns `name pokemon position type fighting`', () => {
    expect(infoGeneral.filter(general_fighting)[2].name).toBe("machop");
  });

});

describe('general psychic', () => {
  it('is a function', () => {
    expect(typeof general_psychic).toBe('function');
  });

  it('returns `length items 15`', () => {
    expect(infoGeneral.filter(general_psychic).length).toBe(15);
  });

  it('returns `name pokemon position type psychic`', () => {
    expect(infoGeneral.filter(general_psychic)[1].name).toBe("kadabra");
  });

});

describe('general rock', () => {
  it('is a function', () => {
    expect(typeof general_rock).toBe('function');
  });

  it('returns `length items 13`', () => {
    expect(infoGeneral.filter(general_rock).length).toBe(13);
  });

  it('returns `name pokemon position type rock`', () => {
    expect(infoGeneral.filter(general_rock)[3].name).toBe("onix");
  });

});

describe('general ghost', () => {
  it('is a function', () => {
    expect(typeof general_ghost).toBe('function');
  });

  it('returns `length items 4`', () => {
    expect(infoGeneral.filter(general_ghost).length).toBe(4);
  });

  it('returns `name pokemon position type ghost`', () => {
    expect(infoGeneral.filter(general_ghost)[0].name).toBe("gastly");
  });

});

describe('general dragon', () => {
  it('is a function', () => {
    expect(typeof general_dragon).toBe('function');
  });

  it('returns `length items 3`', () => {
    expect(infoGeneral.filter(general_dragon).length).toBe(3);
  });

  it('returns `name pokemon position type dragon`', () => {
    expect(infoGeneral.filter(general_dragon)[2].name).toBe("dragonite");
  });

});

describe('general fairy', () => {
  it('is a function', () => {
    expect(typeof general_fairy).toBe('function');
  });

  it('returns `length items 5`', () => {
    expect(infoGeneral.filter(general_fairy).length).toBe(5);
  });

  it('returns `name pokemon position type fairy`', () => {
    expect(infoGeneral.filter(general_fairy)[1].name).toBe("togepi");
  });

});

describe('general dark', () => {
  it('is a function', () => {
    expect(typeof general_dark).toBe('function');
  });

  it('returns `length items 5`', () => {
    expect(infoGeneral.filter(general_dark).length).toBe(5);
  });

  it('returns `name pokemon position type dark`', () => {
    expect(infoGeneral.filter(general_dark)[0].name).toBe("umbreon");
  });

});

describe('general steel', () => {
  it('is a function', () => {
    expect(typeof general_steel).toBe('function');
  });

  it('returns `length items 2`', () => {
    expect(infoGeneral.filter(general_steel).length).toBe(2);
  });

  it('returns `name pokemon position type steel`', () => {
    expect(infoGeneral.filter(general_steel)[1].name).toBe("skarmory");
  });

});

describe('general ice', () => {
  it('is a function', () => {
    expect(typeof general_ice).toBe('function');
  });

  it('returns `length items 6`', () => {
    expect(infoGeneral.filter(general_ice).length).toBe(6);
  });

  it('returns `name pokemon position type steel`', () => {
    expect(infoGeneral.filter(general_ice)[1].name).toBe("articuno");
  });

});
