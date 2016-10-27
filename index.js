import {getPropsObject} from './src/utils';
import {link} from './src/components';

export const renderCustomComponents = (props, customComponents, customLinkComponent) => {
  const {children, href} = props;
  const foundComponent = customComponents[children[0]];
  if (foundComponent) {
    const propsObject = getPropsObject(href);
    return foundComponent(propsObject);
  }
  return customLinkComponent ? customLinkComponent(props) : link(props);
}