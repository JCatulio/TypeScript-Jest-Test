describe('TESTANDO ALGUMA COISA', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});

describe('TESTANDO OUTRA COISA', () => {
  test('should return Luiz', () => {
    const nome = 'Luiz';
    expect(nome).not.toBe('Luiz');
  });
});
