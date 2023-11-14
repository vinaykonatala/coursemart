import React from 'react'
import { Collapse} from 'antd';
import { Checkbox } from 'antd';
import styles from './filterBar.module.css'

function index() {
    const plainOptions = ['Beginner', 'Intermediate', 'Advanced'];
    const langOptions = ['English', 'Telugu', 'Hindhi', 'English, Hindi'];
    const courseOptions = ['Online', 'Classroom', 'Recorderd'];
    const oncheckChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      };
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
          key: '1',
          label: 'Level',
          children: <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={oncheckChange} className={styles.filterGroup} />,
        },
        {
          key: '2',
          label: 'Language',
          children: <Checkbox.Group options={langOptions} defaultValue={['Apple']} onChange={oncheckChange} className={styles.filterGroup} />,

        },
        {
          key: '3',
          label: 'Course Type',
          children: <Checkbox.Group options={courseOptions} defaultValue={['Apple']} onChange={oncheckChange} className={styles.filterGroup} />,

        },
      ];

      const onChange = (key) => {
        console.log(key);
      };
  return (
    <div className='filterBar'>
        <Collapse items={items} defaultActiveKey={['1', '2', '3']} onChange={onChange} expandIconPosition={'right'} />
    </div>
  )
}

export default index