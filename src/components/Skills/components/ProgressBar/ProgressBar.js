import './ProgressBar.css';
import React from 'react';

import posed from 'react-pose';

const SkillBar = posed.div({
  hidden: {
    width: '0%',
  },
  visible: {
    width: ({ widthVal }) => widthVal,
    transition: ({ id }) => ({ duration: 1000, delay: 900 + id * 150 }),
    flip: true,
  },
});

const ProgressBar = ({ name, value, revealed, id }) => {
  return (
    <div className='flex-row-center'>
      <div className='skill-caption'>
        <span className='skill-caption-inner dark-purple-70 bold'>{name}</span>
      </div>

      <div className='skill-bar-outer'>
        <SkillBar
          widthVal={value}
          id={id}
          className='skill-bar-inner'
          pose={revealed ? 'visible' : 'hidden'}
        />
      </div>
      <span className='skill-bar-outer skill-bar-percent'>{value}</span>
    </div>
  );
};

export default ProgressBar;
