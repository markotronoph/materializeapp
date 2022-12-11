import { BaseComponent } from './base.js';

const ui = {
  html: `
    <div class='navbar-container'>
      <div class='navbar-fixed'>
        <nav>
          <div class='nav-wrapper'>
            <a href='#!' class='title brand-logo left'></a>
            <ul class='right'>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  `,
  dropdownContentTemplate: `
    <ul class='dropdown-content'>
    </ul>
  `,
  dropdownTriggerTemplate: `
    <li>
      <a href='#!' class='dropdown-trigger'>
        <i class='material-icons'>menu</i>
      </a>
    </li>
  `,
  dropdownItemTemplate: `
    <li><a href='#!'></a></li>
  `,
};

export class Navbar extends BaseComponent {
  constructor({
    option, data, title,
  }) {
    super({ html: ui.html, option, data });
    this.init({
      option, data, title,
    });
  }

  init(props) {
    if (props.option && props.option.dropdownItemList) {
      this.setDropdown(props.option.dropdownItemList);
    }

    this.setTitle(props.title);
  }

  setTitle(title) {
    this.setUi('.title', title);
  }

  /* dropdownItemList[index]: { label, onClickHandler } */
  setDropdown(dropdownItemList) {
    if (!dropdownItemList || !Array.isArray(dropdownItemList)) {
      throw new Error('navbar.option.dropdownItemList should be an array');
    }

    const $right = this.select('.right');

    this.dropdownId = `dropdown- ${Math.random()}`;

    const $dropdownTrigger = $(ui.dropdownTriggerTemplate);
    $('a', $dropdownTrigger).attr('data-target', this.dropdownId);

    const $dropdownContent = $(ui.dropdownContentTemplate);
    $dropdownContent.attr('id', this.dropdownId);

    dropdownItemList.forEach(({ label, onClickHandler }) => {
      const $dropdownItem = $(ui.dropdownItemTemplate);
      $('a', $dropdownItem).text(label);
      $('a', $dropdownItem).on('click', onClickHandler);
      $dropdownContent.append($dropdownItem);
    });

    $right.empty();
    $right.append($dropdownTrigger);

    this.select('.dropdown-content').remove();
    this.select('nav').append($dropdownContent);
  }

  /* Call after navbar is appended */
  initDropdown() {
    $('.dropdown-trigger').dropdown();
  }
}

function instantiate(props) {
  const component = new Navbar(props);
  return component;
}

export default {
  instantiate,
};
