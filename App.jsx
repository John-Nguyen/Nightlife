import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import controllable from 'react-controllables';

import GoogleMap from 'google-map-react';
import MyGreatPlaceWithControllableHover from './my_great_place_with_controllable_hover.jsx';
import ListViewHover from './ListViewHover.jsx'

import {K_SIZE} from './my_great_place_with_controllable_hover_styles.js';
import PerfectScrollbar from 'react-perfect-scrollbar'
import axios from 'axios';

@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])
export default class EventsMapPage extends Component {
  static propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn
    greatPlaces: PropTypes.array
  };

  static defaultProps = {
    center: [38.0336, -78.5080],
    zoom: 16,
    // greatPlaces:    

    // axios.get('https://www.api.foursquare.com/v2/venues/search?oauth_token=CVSWUWRLU1MSICEQES1SE4VOL1CCLXBOABX3SWKPLB5TSPUZ&v=20131016&ll=38.0336%2C%20-78.5080&intent=checkin&radius=1500&categoryId=4d4b7105d754a06376d81259')
    //   .then(response => {
    //     let greatPlaces = response.data.response.groups[0].items;
    //     this.setState({ greatPlaces:results });
    //   });
    greatPlaces: [
      {id: '1', title: 'Boylan Heights', address: '102 14th St NW', info: 'Prep-school-themed sports tavern for the UVA set offering TVs, fancy burgers, draft beers & more.', lat: 38.036557, lng: -78.5011161},
      {id: '2', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '3', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '4', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '5', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '6', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '7', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '8', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '9', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '0', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '12', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '21', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '22', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203},
      {id: '23', title: 'Trinity Irish Pub', address: '1505 University Ave', info: 'Convivial multi-level hangout with 3 bars, pub grub & numerous beers on tap, plus weekend brunch.', lat: 38.0341318, lng: -78.5002203}
    ]
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
  }

  _onChildClick = (key, childProps) => {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  }

  _onChildMouseEnter = (key , childProps) => {
    this.props.onHoverKeyChange(key, childProps.title, childProps.address, childProps.info);
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    this.props.onHoverKeyChange(null);
  }

  render() {
    const placesList = this.props.greatPlaces
      .map(place => {
        const {id, title, address, info, ...coords} = place;

        return (
          <ListViewHover
            key={id}
            title={title}
            address={address}
            info={info}
            // use your hover state (from store, react-controllables etc...)
            hover={this.props.hoverKey === id} />
        );
      });

    const places = this.props.greatPlaces
      .map(place => {
        const {id, title, address, info, ...coords} = place;

        return (
          <MyGreatPlaceWithControllableHover
            key={id}
            {...coords}
            title={title}
            address={address}
            info={info}
            // use your hover state (from store, react-controllables etc...)
            hover={this.props.hoverKey === id} />
        );
      });

    return (
        <div style={{height: '100%', width: '100%'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '30%', height: '100%', overflow: 'scroll'}}> 
                {placesList}
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '70%', height: '100%'}}>
              <GoogleMap
              // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                style={{width: "100%", height: "100%"}}
                center={this.props.center}
                zoom={this.props.zoom}
                hoverDistance={K_SIZE}
                onBoundsChange={this._onBoundsChange}
                onChildClick={this._onChildClick}
                onChildMouseEnter={this._onChildMouseEnter}
                onChildMouseLeave={this._onChildMouseLeave}
                >
                {places}
            </GoogleMap>
          </div>
        </div>
    );
  }
}