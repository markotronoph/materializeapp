import component from '../common/component/creator.js';
import landing from './landing.js';
import sheet from './sheet.js';

const top = component.instantiate('top', {});

function onClickAdd(event) {
  event.stopPropagation();
  top.setContent(sheet.getContainer());
}

function onClickLoad(event) {
  event.stopPropagation();
  top.setContent('Load');
}

function onClickDelete(event) {
  event.stopPropagation();
  top.setContent('Delete');
}

const navbarOption = {
  dropdownItemList: [
    {
      label: 'Add',
      onClickHandler: onClickAdd,
    },
    {
      label: 'Load',
      onClickHandler: onClickLoad,
    },
    {
      label: 'Delete',
      onClickHandler: onClickDelete,
    },
  ],
};

const navbar = component.instantiate('navbar', {
  option: navbarOption,
});

function init($container) {
  $container.empty();
  $container.append(top.getDom());
  top.setHeader(navbar);
  top.setContent(landing.getContainer());
  navbar.initDropdown();
}

export default {
  init,
};
