/**
 * Toast component
 */

import {
  connect,
} from 'react-redux';

import Toast from '../components/Toast';

const mapState = state => state.toast;

const ToastContainer = connect(
  mapState,
)(Toast);

export default ToastContainer;
