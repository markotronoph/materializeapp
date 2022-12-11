import { BaseComponent } from './base.js';

const ui = {
  html: `
    <div class='container'>
      <div class='content'></div>
    </div>
  `,
};

export class Container extends BaseComponent {
  constructor({
    option, data, content,
  }) {
    super({ html: ui.html, option, data });
    this.init({
      option, data, content,
    });
  }

  init(props) {
    this.setContent(props.content);
  }

  setContent(content) {
    this.setUi('.content', content);
  }
}

function instantiate(props) {
  const component = new Container(props);
  return component;
}

export default {
  instantiate,
};
