const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  // Para o argumento count deve retornar o número inteiro 4;
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  // Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  // Para o argumento averageAge deve retornar um número próximo a 10.5;
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  // Para argumento vazio deve retornar undefined
  it('Para o argumento vazio deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  // Para argumento que não é uma string deve retornar: 'Parâmetro inválido, é necessário uma string'
  it('Para argumento que não é uma string deve retornar: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  // Para o argumento vazio deve retornar 'null';
  it('Para o argumento vazio deve retornar null', () => {
    expect(handlerElephants('wrongParameter')).toBeNull();
  });
  // Para o argumento de uma String contida dentro do objeto elefantes deve retornar a respectiva chave
  it('Para o argumento de uma String contida dentro do objeto elefantes deve retornar a respectiva chave', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
