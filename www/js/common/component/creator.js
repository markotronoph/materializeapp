import navbar from './navbar.js';
import container from './container.js';
import top from './top.js';

const ui = {
  container,
  navbar,
  top,
};

function instantiate(type, props) {
  return ui[type].instantiate(props);
}

export default {
  instantiate,
};
