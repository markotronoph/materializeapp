import { BaseComponent } from './base.js';

const ui = {
  html: `
    <div class='top'>
      <div class='header'></div>
      <div class='content'></div>
    </div>
  `,
};

export class Top extends BaseComponent {
  constructor({
    option, data, header, content,
  }) {
    super({ html: ui.html, option, data });
    this.init({
      option, data, header, content,
    });
  }

  init(props) {
    this.setHeader(props.header);
    this.setContent(props.content);
  }

  setHeader(header) {
    this.setUi('.header', header);
  }

  setContent(content) {
    this.setUi('.content', content);
  }
}

function instantiate(props) {
  const component = new Top(props);
  return component;
}

export default {
  instantiate,
};
