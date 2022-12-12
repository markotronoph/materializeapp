import container from './container.js';
import input from './input.js';
import navbar from './navbar.js';
import textarea from './textarea.js';
import top from './top.js';

const ui = {
  container,
  input,
  navbar,
  textarea,
  top,
};

function instantiate(type, props) {
  return ui[type].instantiate(props);
}

export default {
  instantiate,
};
