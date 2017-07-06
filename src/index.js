import React, { Component } from "react";
import * as storybook from "@kadira/storybook";
import { setOptions as setOptionsAddon } from "@kadira/storybook-addon-options";
import infoAddon from "react-storybook-addon-info";
import * as knob from "@kadira/storybook-addon-knobs";
import utils from "react-storybook-addon-utils";
import defaultConfig from "./defaultConfig";
import StyleWrapper from "./StyleWrapper";
import deepmerge from "deepmerge";

let conf = defaultConfig;
function config(newConfig = {}) {
  // if (module.hot) {
  //   module.hot.accept();
  // }
  
  // const
  conf = deepmerge(defaultConfig, newConfig, { arrayMerge: (d, s) => s });
  conf.options && setOptionsAddon(conf.options);
  conf.knob && storybook.addDecorator(knob.withKnobs);
  conf.utils && storybook.addDecorator(utils(conf.utils));
  // conf.backgrounds && storybook.addDecorator(backgroundsAddon(conf.backgrounds));
  conf.isomorphicStyles &&
    storybook.addDecorator(story => <StyleWrapper children={story()} />);
  conf.info && storybook.setAddon(infoAddon);
  conf.modules && wrapModules(conf.modules, module);  
}

const storiesOf = (...args) => {
  const res = storybook.storiesOf(...args);
  res._add = res.add;
  if (conf.info) {
    res.add = (...args) => {
      if (res.inAdd) {
        return res._add(...args);
      }
      res.inAdd = true;
      const result = res.addWithInfo(...args);
      res.inAdd = false;
      return result;
    };
  }
  res.addHtml = html => {
    // console.log({html});
    return res.addDecorator(story => (
      <div className="add-html-from-storybox">
        {html}
        {story()}
      </div>
    ));
  };
  // console.log(res);
  res.addStyle = style => {
    return res.addDecorator(story => (
      <div>
        <style>{style.toString()}</style>
        {story()}
      </div>
    ));
  };
  return res;
};

const storyParams = {
  action: storybook.action,
  knob,
  storiesOf
};

function wrapModule(module) {
  if (typeof module === "function") {
    module(storyParams);
  } else if (typeof module === "object" && module.__esModule) {
    for (let key in module) {
      // eslint-disable-line
      module[key](storyParams);
    }
  } else {
    console.log("DO SOMETHING ELSE");
  }
}

function wrapModules(stories, module) {
  return storybook.configure(() => {
    for (let key in stories) {
      // eslint-disable-line
      wrapModule(stories[key]);
    }
  }, module);
}
const { configure, addDecorator, setAddon } = storybook;
export { configure, addDecorator, setAddon };
// export storybook;
export { wrapModule, wrapModules, storyParams, config, defaultConfig };
