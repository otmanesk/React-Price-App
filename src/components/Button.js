import React, {Component} from "react";
import getClasses from '../Helpers/getClasses';

class Button extends Component {
  _buildClasses() {
    let classes = ['btn'];

    if (this.props.floating) {
      classes.push("bmd-btn-fab");
    } else {
      const size = `btn-${this.props.size}`;
      classes.push(size);
    }

    if (this.props.disabled) {
      classes.push('disabled');
    }
    if (this.props.outlined) {
      classes.push(`btn-outline-${this.props.type}`);
    } else {
      classes.push(`btn-${this.props.type}`);
    }
    if (this.props.raised) {
      classes.push("btn-raised");
    }
    if (this.props.active) {
      classes.push('active');
    }
    if (this.props.block) {
      classes.push('btn-block');
    }
    return classes.join(" ");
  }

  render() {
    return (
      <button type="button"
              className={getClasses(this._buildClasses(), this.props.classes)}
              data-toggle={this.props.data}
              aria-pressed={this.props.pressed}
              autoComplete={this.props.autocomplete}>
        {this.props.ButtonName || this.props.children}
      </button>
    );
  }
}
 
export default Button;