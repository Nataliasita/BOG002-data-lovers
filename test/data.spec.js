import { general_fire, general_grass, general_water,general_bug,general_normal,general_poison, general_flying, general_electric, 
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
});

describe('general grass', () => {
  it('is a function', () => {
    expect(typeof general_grass).toBe('function');
  });

  it('returns `length items 21`', () => {
    expect(infoGeneral.filter(general_grass).length).toBe(21);
  });
});



