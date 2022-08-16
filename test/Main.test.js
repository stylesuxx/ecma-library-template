import Main from '../src/Main';

describe('Main.js', () => {
  test('Creates instance of Class main', () => {
    const main = new Main();

    expect(typeof main).toEqual('object');
    expect(main instanceof Main).toBeTruthy();
  });

  test('Echoes parameter', () => {
    const main = new Main();
    const testString = 'foobar';

    expect(main.echo(testString)).toEqual(testString);
  });
});
