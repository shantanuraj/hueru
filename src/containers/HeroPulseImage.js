/**
 * Connected pulse image to trigger pulse animation
 */

import {
  connect,
} from 'react-redux';

import HeroImg from '../components/HeroImg';

export const NOT_FINDING = 'NOT_FINDING';
export const FINDING = 'FINDING';
export const FOUND = 'FOUND';

const mapState = state => {
  const {
    found,
    ip,
  } = state.bridgeFinder;

  let status = NOT_FINDING;

  if (!found && ip) {
    status = FINDING;
  } else if (found) {
    status = FOUND;
  }

  return { status };
}

const HeroPulseImage = connect(
  mapState,
)(HeroImg);

export default HeroPulseImage;
