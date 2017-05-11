import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {greatPlaceStyle, greatPlaceStyleHover, hiddenHint, shownHint} from './my_great_place_with_controllable_hover_styles.js';
import ReactTooltip from 'react-tooltip'

export default class MyGreatPlaceWithControllableHover extends Component {
  static propTypes = {
    // use hover from controllable
    hover: PropTypes.bool,
    title: PropTypes.string,
    address: PropTypes.string,
    info: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
    const hidden = this.props.hover ? shownHint : hiddenHint;

    return (
      <div>
       <div data-tip="React-tooltip" style={style}></div>
        <div style={hidden}>
          <ReactTooltip place="top" type="light" effect="solid" style={"width:40px"}>
              <b>{this.props.title}</b>
              <br></br>
              <i>{this.props.address}</i>
              <br></br>
              {this.props.info}
          </ReactTooltip>
        </div>
      </div>
    );
  }
}