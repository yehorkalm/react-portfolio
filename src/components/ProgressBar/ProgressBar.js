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
    <div className='flex'>
      <div className='skill-caption'>
        <span className='skill-caption-inner'>{name}</span>
      </div>

      <div className='skill-bar-outer'>
        <SkillBar
          widthVal={value}
          id={id}
          className='skill-bar-inner'
          pose={revealed ? 'visible' : 'hidden'}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
