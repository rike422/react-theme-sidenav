import { NavIcon, NavText } from "./Nav";
import { Children } from "react";

const findComponent = ComponentToFind => children => {
  return Children.toArray(children).reduce((found, next) => {
    if (found === null && next !== null && next.type === ComponentToFind) {
      return next;
    }
    return found;
  }, null);
};

const findIcon = findComponent(NavIcon);
const findText = findComponent(NavText);
const identity = () => {
};

export {
  findComponent,
  findIcon,
  findText
}