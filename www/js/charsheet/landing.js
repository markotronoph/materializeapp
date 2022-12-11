import component from '../common/component/creator.js';

const ui = {
  html: `
    <div class='landing'>
      <img src='img/charsheet/title.png' />
      <div class='subtitle'>Character Sheet</div>
    </div>
  `,
};

const container = component.instantiate('container', { content: $(ui.html) });

function getContainer() {
  return container;
}

export default {
  getContainer,
};
