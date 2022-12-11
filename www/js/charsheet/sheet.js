import component from '../common/component/creator.js';

// const max = {
//   stress: 6,
//   corruption: 6,
//   inventory: 15,
//   xp: 10,
//   skills: 10,
//   conditions: 10,
//   stash: 20,
//   harm: 4,
// };

const ui = {
  html: `
    <div class='sheet'>
      <div class='name'>NAME</div>
      <div class='look'></div>
      <div class='stress'></div>
      <div class='corruption'></div>
      <div class='experience'></div>
      <div class='skills'></div>
      <div class='conditions'></div>
      <div class='inventory'></div>
      <div class='stash'></div>
      <div class='companions'></div>
      <div class='notes'></div>
    </div>
  `,
  companionTemplate: `
    <div class='companion'>
      <div class='name'></div>
      <div class='harm'></div>
    </div>
  `,
};

function setCharacter(_container, _character) {

}

function getContainer(character) {
  const container = component.instantiate('container', { content: $(ui.html) });
  setCharacter(container, character);
  return container;
}

export default {
  getContainer,
};
