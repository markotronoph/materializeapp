import { BaseComponent } from './base.js';

const ui = {
  html: `
  <div class='input-field'>
    <input/>
    <label class='active'></label>
  </div>
  `,
  defaultType: 'text',
};

export class Input extends BaseComponent {
  constructor({
    option, data, value, label, type = ui.defaultType, placeholder, className,
  }) {
    super({
      html: ui.html, option, data, className,
    });
    this.init({
      option, data, value, label, type, placeholder,
    });
  }

  init(props) {
    this.id = `input-${Math.random()}`;
    const $input = this.select('input', this.$dom);
    $input.attr('id', this.id);
    $input.attr('type', props.type);
    this.select('label', this.$dom).attr('for', this.id);

    this.setLabel(props.label);
    this.setValue(props.value);
    this.setPlaceholder(props.placeholder);
  }

  setLabel(label) {
    this.setUi('label', label);
  }

  setValue(value) {
    this.select('input', this.$dom).val(value);
  }

  getValue() {
    return this.select('input', this.$dom).val();
  }

  setPlaceholder(placeholder) {
    this.select('input', this.$dom).attr('placeholder', placeholder);
  }
}

function instantiate(props) {
  const component = new Input(props);
  return component;
}

export default {
  instantiate,
};
