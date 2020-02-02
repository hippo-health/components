import { configure } from "@storybook/react";
// const req = require.context("../src", true, /\.stories\.tsx$/);
// function loadStories() {
//     require('../stories/Button.stories');
//     req.keys().forEach(req);
// }
// configure(loadStories, module);
configure(require.context('../src', true, /\.stories\.tsx?$/), module);