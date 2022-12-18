import component from '../common/component/creator.js';

const max = {
  stress: 6,
  corruption: 6,
  inventory: 15,
  experience: 10,
  skills: 10,
  conditions: 10,
  stash: 20,
  harm: 4,
  companion: 4,
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

  // stress
  state.stressList = [];
  const stressContainer = component.instantiate('container', { isRow: true, className: 'six-column' });
  for (let index = 0; index < max.stress; index += 1) {
    const stress = component.instantiate('checkbox', { isChecked: false });
    state.stressList.push(stress);
  }
  stressContainer.setContent(state.stressList);
  $('.stress', container.getDom()).append(stressContainer.getDom());

  // corruption
  state.corruptionList = [];
  const corruptionContainer = component.instantiate('container', { isRow: true, className: 'six-column' });
  for (let index = 0; index < max.corruption; index += 1) {
    const corruption = component.instantiate('checkbox', { isChecked: false });
    state.corruptionList.push(corruption);
  }
  corruptionContainer.setContent(state.corruptionList);
  $('.corruption', container.getDom()).append(corruptionContainer.getDom());

  // experience
  state.experienceList = [];
  const experienceContainer = component.instantiate('container', { isRow: true, className: 'five-column' });
  for (let index = 0; index < max.experience; index += 1) {
    const experience = component.instantiate('checkbox', { isChecked: false });
    state.experienceList.push(experience);
  }
  experienceContainer.setContent(state.experienceList);
  $('.experience', container.getDom()).append(experienceContainer.getDom());

  // stash
  state.stashList = [];
  const stashContainer = component.instantiate('container', { isRow: true, className: 'five-column' });
  for (let index = 0; index < max.stash; index += 1) {
    const stash = component.instantiate('checkbox', { isChecked: false });
    state.stashList.push(stash);
  }
  stashContainer.setContent(state.stashList);
  $('.stash', container.getDom()).append(stashContainer.getDom());

  // companion
  state.companionMap = new Map();
  for (let index = 0; index < max.companion; index += 1) {
    const companionName = component.instantiate('input', { type: 'text', className: 'companion-name' });
    const companion = {
      companionName,
      harmList: [],
    };
    for (let idx = 0; idx < max.harm; idx += 1) {
      const harm = component.instantiate('checkbox', { isChecked: false });
      companion.harmList.push(harm);
    }
    state.companionMap.set(`companion-${index}`, companion);
  }

  const companionContainerList = [];
  state.companionMap.forEach(({ companionName, harmList }) => {
    const companionContainer = component.instantiate('container', { isRow: true });
    companionContainer.setContent([companionName, ...harmList]);
    companionContainerList.push(companionContainer);
  });
  companionContainerList.map((companionContainer) => $('.companions', container.getDom()).append(companionContainer.getDom()));
}

function getContainer(character) {
  const container = component.instantiate('container', { content: $(ui.html) });
  init(container, character);
  return container;
}

export default {
  getContainer,
};
