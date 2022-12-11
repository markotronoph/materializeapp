import util from './util/util.js';
import charsheet from '../charsheet/charsheet.js';

const apps = {
  charsheet,
};

function onDeviceReady() {
  const appName = util.getAppName();
  apps[appName].init($(`#${appName}`));
}

document.addEventListener('deviceready', onDeviceReady, false);
