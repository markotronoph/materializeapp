import top from './top.js';

const ui = {
  top,
};

function instantiate(type, props) {
  return ui[type].instantiate(props);
}

export default {
  instantiate,
};
