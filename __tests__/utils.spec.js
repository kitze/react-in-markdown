import {getPropsObject, getRegexMatches} from '../src/utils';
import {matchPropRegex} from '../src/regex';

test('getPropsObject', () => {
  const props1 = 'id=5, user=kitze';
  const props2 = 'id=5,user=kitze';
  const props3 = ' id=5,user=kitze';

  const result = {
    id: '5',
    user: 'kitze'
  };

  expect(getPropsObject(props1)).toEqual(result);
  expect(getPropsObject(props2)).toEqual(result);
  expect(getPropsObject(props3)).toEqual(result);
});

test('getRegexMatches', () => {

  const string = 'id=5, user=kitze';
  const keys = [];
  const values = [];

  getRegexMatches(string, matchPropRegex, ([full, key, value]) => {
    keys.push(key);
    values.push(value);
  });

  expect(keys).toEqual(['id', 'user']);
  expect(values).toEqual(['5', 'kitze']);

});