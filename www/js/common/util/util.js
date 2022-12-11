function getAppName() {
  return window.location.href.split('/').pop().replace('.html', '');
}

export default {
  getAppName,
};
