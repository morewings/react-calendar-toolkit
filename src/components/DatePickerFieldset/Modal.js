import {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = props => {
  const nodeRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  useEffect(() => {
    if (!isNodeAttached) {
      nodeRef.current = document.createElement('div');
      nodeRef.current.classList.add('portal-container');
      document.body.appendChild(nodeRef.current);
      setIsNodeAttached(true);
    }
  }, [isNodeAttached]);
  return isNodeAttached
    ? ReactDOM.createPortal(props.children, nodeRef.current)
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
