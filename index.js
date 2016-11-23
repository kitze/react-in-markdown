import {getPropsObject} from './src/utils';
import {link} from './src/components';
import React from 'react';

export const renderCustomComponents = (props, customComponents, customLinkComponent) => {
  const {children, href} = props;
  const foundComponent = customComponents[children[0]];
  if (foundComponent) {
    const propsObject = getPropsObject(href);
    return React.createElement(foundComponent, propsObject);
  }
  return customLinkComponent ? React.createElement(customLinkComponent, props) : React.createElement(link, props);
}
