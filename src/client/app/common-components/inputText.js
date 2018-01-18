import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class inputText extends React.Component {
  // console.log('a');
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    const formClasses = classNames({
      'form-group': true,
      'has-error': this.props.meta.touched && this.props.meta.error
    });
    return (
      <div className={formClasses}>
        <pre>{JSON.stringify(this.props.meta, 0, 2)}</pre>
        <label className="control-label">{this.props.label}</label>
        <input className="form-control" {...this.props.input} />
        <sub className="pull-right has-error">{
          this.props.meta.touched && this.props.meta.error}
        </sub>
      </div>
    );
  }
}
inputText.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string
};

inputText.defaultProps = {
  input: {},
  meta: {},
  label: ''
};
export default inputText;
