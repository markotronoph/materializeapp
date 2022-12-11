export class BaseComponent {
  constructor({ html, option, data }) {
    this.$dom = $(html);
    this.setOption(option);
    this.setData(data);
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setOption(option) {
    this.option = option;
  }

  getOption() {
    return this.option;
  }

  getDom() {
    return this.$dom;
  }

  show() {
    this.$dom.show();
  }

  hide() {
    this.$dom.hide();
  }

  select(selector) {
    return $(selector, this.$dom);
  }

  append($child) {
    this.$dom.append($child);
  }

  empty() {
    this.$dom.empty();
  }

  init() {
    /* Override */
  }

  setUi(selector, ui) {
    if (!selector || !ui) return;

    if (typeof ui === 'string') {
      this.select(selector).empty().text(ui);
    }

    if (ui instanceof jQuery) {
      this.select(selector).empty().append(ui);
    }

    if (ui instanceof BaseComponent) {
      this.select(selector).empty().append(ui.getDom());
    }
  }
}

function instantiate(props) {
  const component = new BaseComponent(props);
  return component;
}

export default {
  instantiate,
};
