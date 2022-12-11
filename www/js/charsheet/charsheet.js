import component from '../common/component/creator.js';

const option = {

};

const data = {

};

function init($container) {
  const top = component.instantiate('top', {
    option, data, header: 'header', content: 'content',
  });
  $container.empty();
  $container.append(top.getDom());
}

export default {
  init,
};
