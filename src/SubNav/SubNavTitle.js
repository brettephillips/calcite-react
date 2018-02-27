import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavTitle } from './SubNav-styled';

const SubNavTitle = ({ children, blue, ...other }) => {
  const subNavTitle = (
    <StyledSubNavTitle blue={blue} {...other}>
      {children}
    </StyledSubNavTitle>
  );

  return subNavTitle;
};

SubNavTitle.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool
};

SubNavTitle.defaultProps = {
  blue: false
};

export default SubNavTitle;
