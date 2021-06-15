import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div className="header px-5">
      <h3 className="float-start"> {title}</h3>
      <button
        onClick={onAdd}
        type="button"
        className={`btn ${
          showAddTask ? ' btn-danger ' : 'btn-primary'
        } btn-primary float-end py-1 px-3`}
      >
        {showAddTask ? 'Close' : 'Add'}
      </button>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
