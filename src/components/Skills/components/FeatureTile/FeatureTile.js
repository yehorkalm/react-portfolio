import React from 'react';
import './FeatureTile.css';

import InView from 'react-inview-monitor';

const FeatureTile = ({ icon, header, text, id }) => {
  const delayedClassTile = `animated flipInY delay-${id}`;
  const delayedClassText = `animated fadeIn delay-${id}`;
  return (
    <React.Fragment>
      <InView
        classNameNotInView='hidden'
        classNameInView={delayedClassTile}
        intoViewMargin='-20%'
      >
        <div className='hex-wrap'>
          <div className='hexagon1'>
            <i className={icon} />
          </div>
        </div>
      </InView>
      <InView
        classNameNotInView='hidden'
        classNameInView={delayedClassText}
        intoViewMargin='-20%'
      >
        <div className='bold label dark-purple-70'>{header}</div>
        <div className='text dark-purple-70'>{text} </div>
      </InView>
    </React.Fragment>
  );
};
export default FeatureTile;
