import { Base } from '../../common/classes/base.js';

export const MAX = {
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

export class Character extends Base {
  constructor({
    id, name, look, stress,
    corruption, experience, skillList,
    conditionList, inventoryList, stashList,
    companionList, notes,
  }) {
    super();
    this.setId(id);
    this.setName(name);
    this.setLook(look);
    this.setStress(stress);
    this.setCorruption(corruption);
    this.setExperience(experience);
    this.setSkillList(skillList);
    this.setConditionList(conditionList);
    this.setInventoryList(inventoryList);
    this.setStashList(stashList);
    this.setCompanionList(companionList);
    this.setNotes(notes);
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = this.getStringVal(name);
  }

  setLook(look) {
    this.look = this.getStringVal(look);
  }

  setNotes(notes) {
    this.notes = this.getStringVal(notes);
  }

  setStress(stress) {
    this.stress = this.getNumericVal(stress);
  }

  setCorruption(corruption) {
    this.corruption = this.getNumericVal(corruption);
  }

  setExperience(experience) {
    this.experience = this.getNumericVal(experience);
  }

  setSkillList(skillList) {
    this.skillList = this.getArrayVal(skillList);
  }

  setConditionList(conditionList) {
    this.conditionList = this.getArrayVal(conditionList);
  }

  setInventoryList(inventoryList) {
    this.inventoryList = this.getArrayVal(inventoryList);
  }

  setStashList(stashList) {
    this.stashList = this.getArrayVal(stashList);
  }

  setCompanionList(companionList) {
    this.companionList = this.getArrayVal(companionList);
  }
}
