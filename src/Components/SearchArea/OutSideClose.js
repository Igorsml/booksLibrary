import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutSideClose(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("clicked outside of element");
        return (ref.current = "");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutSideClose(props) {
  const wrapperRef = useRef(null);
  useOutSideClose(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutSideClose.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutSideClose;
