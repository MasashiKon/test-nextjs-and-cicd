const attack = require('./attacks');

test('should return damege sentence when called correctrly', () => {
  const result = attack('Smelly Ogre', 23);

  expect(result).toBe('Smelly Ogre dealt 23 damege!');
  expect(result).toMatch(/^Smelly Ogre(.*)/);
  expect(result).toMatchInlineSnapshot('"Smelly Ogre dealt 23 damege!"');
});
