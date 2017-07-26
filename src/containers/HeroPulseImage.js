/**
 * Connected pulse image to trigger pulse animation
 */

import {
  connect,
} from 'react-redux';

import HeroImg from '../components/HeroImg';

const mapState = state => ({
  isActive: !!state.bridgeInput.ip,
});

const HeroPulseImage = connect(
  mapState,
)(HeroImg);

export default HeroPulseImage;
