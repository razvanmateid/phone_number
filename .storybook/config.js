import { configure } from '@storybook/react';
Object.values = (obj) => Object.keys(obj).map(key => obj[key]);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
