import dbUtil from '../common/util/database.js';
import { Character } from './classes/character.js';

async function init() {
  const character = new Character({});
  const database = await dbUtil.openDb('charsheet_db');
  await dbUtil.createTable({
    database,
    table: 'character',
    columnList: Object.keys(character),
  });
}

export default {
  init,
};
