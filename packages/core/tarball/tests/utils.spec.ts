import { getVersionFromTarball } from '../src';

test('get tarball version', () => {
  expect(getVersionFromTarball('https://registry.verdaccio.org/aaa/-/aaa-0.0.1.tgz')).toEqual(
    '0.0.1'
  );
});

test('should not get tarball version', () => {
  expect(getVersionFromTarball('https://registry.verdaccio.org/aaa/-/aaa.tgz')).toBeUndefined();
});
