const K_SIZE = 10;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  // border: '5px solid #f44336',
  // borderRadius: K_SIZE,
  // backgroundColor: 'white',
  // textAlign: 'center',
  // color: '#3f51b5',
  // fontSize: 16,
  // fontWeight: 'bold',
  // padding: 4,
  // cursor: 'pointer'

  border: '2px solid white',
  borderRadius: K_SIZE,
  backgroundColor: '#90EE90',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 2,
  cursor: 'pointer'

};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  width: K_SIZE * 1.5,
  height: K_SIZE * 1.5,
  borderRadius: K_SIZE * 1.5,
  left: -K_SIZE * 1.5 / 2,
  top: -K_SIZE * 1.5 / 2,
  border: '3px solid white',
  // border: '5px solid #3f51b5',
  // color: '#f44336'
};

const hiddenHint = {
  opacity: 0,
}

const shownHint = {
}

export {greatPlaceStyle, greatPlaceStyleHover, hiddenHint, shownHint, K_SIZE};