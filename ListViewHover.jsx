import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {ListViewStyle} from './ListViewStyles.js';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class ListViewHover extends Component {
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
    return (
      <div>
          <div style={ListViewStyle}>
              <b>{this.props.title}</b>
              <br></br>
              <i>{this.props.address}</i>
              <br></br>
              {this.props.info}
          </div>
          <div style={{position:'center', width: '98%'}}>
            <hr></hr>
          </div>
      </div>
    );
  }
}