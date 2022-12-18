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
    option, data, content, isRow = false, className,
  }) {
    super({
      html: ui.html, option, data, className,
    });
    this.init({
      option, data, content, isRow,
    });
  }

  init(props) {
    this.setContent(props.content);
    this.setIsRow(props.isRow);
  }

  setIsRow(isRow) {
    this.select('.content').removeClass('row');
    this.select('.content').removeClass('column');
    if (!isRow) {
      this.select('.content').addClass('column');
      return;
    }
    this.select('.content').addClass('row');
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
