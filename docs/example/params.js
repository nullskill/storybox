// export default {
//   modules: require('glob-loader!./glob.txt'),
//   options: {
//     name: 'YourComponent',
//   },
//   info: true,
// };

// const path = require('path');
// const context = require.context('components', true, /.story.js$/)

let stories = {
  modules: {},
  options: {
    name: 'YourComponent',
  },
  info: true,
  isomorphicStyles: false
};

// context.keys().forEach(filename => {
//   let module = context(filename);
//   stories.modules[path.join('../src/components/', filename)] = module;
// });

export default stories;
