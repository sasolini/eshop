import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import DirectoryImg1 from '../../assets/coffee_organic.jpg';
import DirectoryImg2 from '../../assets/coffee_pods.jpg';
import DirectoryImg3 from '../../assets/coffee_beans.jpg';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  const DirectoryImages = {
    1: DirectoryImg1,
    2: DirectoryImg2,
    3: DirectoryImg3,
  };

  return (
    <DirectoryMenuContainer>
      {sections
        .filter(({ id }) => id <= 3)
        .map(({ id, ...otherSectionProps }) => {
          return (
            <MenuItem
              key={id}
              image={DirectoryImages[id]}
              {...otherSectionProps}
            />
          );
        })}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
