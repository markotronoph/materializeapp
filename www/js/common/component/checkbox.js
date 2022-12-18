import { BaseComponent } from './base.js';

const ui = {
  html: `
    <div class='checkbox'>
      <label>
        <input type='checkbox' />
        <span></span>
      </label>
    </div>
  `,
};

export class Checkbox extends BaseComponent {
  constructor({
    option, data, label, isChecked = false,
  }) {
    super({ html: ui.html, option, data });
    this.init({
      option, data, label, isChecked,
    });
  }

  init(props) {
    this.setLabel(props.label);
    this.setChecked(props.isChecked);
  }

  setLabel(label) {
    this.setUi('span', label);
  }

  setChecked(isChecked) {
    this.select('input').prop('checked', isChecked);
  }
}

function instantiate(props) {
  const component = new Checkbox(props);
  return component;
}

export default {
  instantiate,
};
