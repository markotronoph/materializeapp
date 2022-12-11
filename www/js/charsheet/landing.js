import component from '../common/component/creator.js';

const ui = {
  html: `
    <div class='landing'>
      <img src='img/charsheet/landing.png' />
      <div class='subtitle'>Character Sheet</div>
    </div>
  `,
};

function getContainer() {
  const container = component.instantiate('container', { content: $(ui.html) });
  return container;
}

export default {
  getContainer,
};
