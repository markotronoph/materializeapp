import util from './util/util.js';
import charsheet from '../charsheet/charsheet.js';

const apps = {
  charsheet,
};

async function onDeviceReady() {
  const appName = util.getAppName();
  await apps[appName].init($(`#${appName}`));
}

document.addEventListener('deviceready', onDeviceReady, false);
