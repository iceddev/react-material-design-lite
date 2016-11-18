'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const labelBaseClasses = {
  'mdl-switch': true,
  'mdl-js-switch': true,
};

const inputBaseClasses = {
  'mdl-switch__input': true,
};

class Switch extends React.Component {
  constructor(...args) {
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);
  }

  componentDidMount() {
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialSwitch');
  }

  componentWillUnmount() {
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render() {
    const {
      className,
      ripple,
      label,
      id = this._autoId,
      ...rest
    } = this.props;

    const labelClasses = classnames(labelBaseClasses, {
      'mdl-js-ripple-effect': ripple,
    });

    const inputClasses = classnames(inputBaseClasses, className);

    let labelField;
    if (label) {
      labelField = (<span className="mdl-switch__label">{label}</span>);
    }

    const saveRef = element => (this._element = element);

    return (
      <label ref={saveRef} htmlFor={id} className={labelClasses}>
        <input {...rest} id={id} type="checkbox" className={inputClasses} />
        {labelField}
      </label>
    );
  }
}

Switch.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  label: React.PropTypes.string,
};

module.exports = Switch;
