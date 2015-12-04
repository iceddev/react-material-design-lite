'use strict';

require('./icons.css');
require('material-design-lite/material.min.css');

const components = {
  Icon: require('./icon'),
  Button: require('./button'),
  Badge: require('./badge'),
  Slider: require('./slider'),
  Progress: require('./progress'),
  Spinner: require('./spinner'),
  Textfield: require('./text-field'),
  Tooltip: require('./tooltip'),
  Checkbox: require('./checkbox'),
  Radio: require('./radio'),
  Switch: require('./switch'),
  IconToggle: require('./icon-toggle')
};

module.exports = components;
