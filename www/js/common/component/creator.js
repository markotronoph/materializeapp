import navbar from './navbar.js';
import top from './top.js';

const ui = {
  navbar,
  top,
};

function instantiate(type, props) {
  return ui[type].instantiate(props);
}

export default {
  instantiate,
};
