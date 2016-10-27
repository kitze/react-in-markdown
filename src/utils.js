import {matchPropRegex} from './regex';

export const getRegexMatches = (string, regexExpression, callback) => {
  let match;
  while (( match = regexExpression.exec(string) ) !== null) {
    callback(match);
  }
};

export const getPropsObject = propsString => {
  const object = {};
  getRegexMatches(propsString, matchPropRegex, ([fullMatch, key,value]) => {
    object[key] = value;
  });
  return object;
}