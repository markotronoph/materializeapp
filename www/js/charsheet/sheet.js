import component from '../common/component/creator.js';

const max = {
  stress: 6,
  corruption: 6,
  inventory: 15,
  xp: 10,
  skills: 10,
  conditions: 10,
  stash: 20,
  harm: 4,
};

const ui = {
  html: `
    <div class='sheet'>
      <div>
        <div class='font-sml'>Name</div>
        <div class='name'></div>
      </div>
      <div>
        <div class='font-sml'>Look</div>
        <div class='look'></div>
      </div>
      <div>
        <div class='font-sml'>Stress</div>
        <div class='stress'></div>
      </div>
      <div>
        <div class='font-sml'>Corruption</div>
        <div class='corruption'></div>
      </div>
      <div>
        <div class='font-sml'>Experience</div>
        <div class='experience'></div>
      </div>
      <div>
        <div class='font-sml'>Skills</div>
        <div class='skills'></div>
      </div>
      <div>
        <div class='font-sml'>Conditions</div>
        <div class='conditions'></div>
      </div>
      <div>
        <div class='font-sml'>Inventory</div>
        <div class='inventory'></div>
      </div>
      <div>
        <div class='font-sml'>Stash</div>
        <div class='stash'></div>
      </div>
      <div>
        <div class='font-sml'>Companions</div>
        <div class='companions'></div>
      </div>
      <div>
        <div class='font-sml'>Notes</div>
        <div class='notes'></div>
      </div>
    </div>
  `,
  companionTemplate: `
    <div class='companion'>
      <div class='name'></div>
      <div class='harm'></div>
    </div>
  `,
};

const state = {

};

function init(container, _character) {
  Object.keys(state).forEach((key) => {
    state[key] = null;
  });

  // name
  const name = component.instantiate('input', {
    type: 'text',
  });
  $('.name', container.getDom()).append(name.getDom());
  state.name = name;

  // look
  const look = component.instantiate('textarea', {});
  $('.look', container.getDom()).append(look.getDom());
  state.look = look;

  // notes
  const notes = component.instantiate('textarea', {});
  $('.notes', container.getDom()).append(notes.getDom());
  state.notes = notes;

  // skills
  state.skillList = [];
  for (let index = 0; index < max.skills; index += 1) {
    const skill = component.instantiate('input', {
      type: 'text',
    });
    $('.skills', container.getDom()).append(skill.getDom());
    state.skillList.push(skill);
  }

  // conditions
  state.conditionList = [];
  for (let index = 0; index < max.conditions; index += 1) {
    const condition = component.instantiate('input', {
      type: 'text',
    });
    $('.conditions', container.getDom()).append(condition.getDom());
    state.conditionList.push(condition);
  }

  // inventory
  state.inventoryList = [];
  for (let index = 0; index < max.inventory; index += 1) {
    const inventory = component.instantiate('input', {
      type: 'text',
    });
    $('.inventory', container.getDom()).append(inventory.getDom());
    state.inventoryList.push(inventory);
  }
}

function getContainer(character) {
  const container = component.instantiate('container', { content: $(ui.html) });
  init(container, character);
  return container;
}

export default {
  getContainer,
};
