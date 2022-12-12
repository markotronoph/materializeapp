import { BaseComponent } from './base.js';

const ui = {
  html: `
  <div class='input-field'>
    <textarea class='materialize-textarea'></textarea>
    <label class='active'></label>
  </div>
  `,
};

export class Textarea extends BaseComponent {
  constructor({
    option, data, value, label, type = ui.defaultType, placeholder,
  }) {
    super({ html: ui.html, option, data });
    this.init({
      option, data, value, label, type, placeholder,
    });
  }

  init(props) {
    this.id = `textarea-${Math.random()}`;
    const $textarea = this.select('textarea', this.$dom);
    $textarea.attr('id', this.id);
    this.select('label', this.$dom).attr('for', this.id);

    this.setLabel(props.label);
    this.setValue(props.value);
  }

  setLabel(label) {
    this.setUi('label', label);
  }

  setValue(value) {
    this.select('textarea', this.$dom).val(value);
  }

  getValue() {
    return this.select('textarea', this.$dom).val();
  }
}

function instantiate(props) {
  const component = new Textarea(props);
  return component;
}

export default {
  instantiate,
};
