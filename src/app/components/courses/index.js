import React from 'react'
import styles from './courses.module.css'
import Course from '../course'
import FilterBar from '../filterBar'
import { Button, Dropdown, Col, Row } from 'antd';
function index() {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ];
  return (
    <div className={styles.courses}>
            <div className='container'>
                <div className=''>
                   
                    
                    <div>
                    {false ? (<><div className={`${styles.head} flex between`}>
                      
                        <h1>Latest Courses List</h1>
                        <div>
                            <Dropdown
                            menu={{
                                items,
                            }}
                            placement="Sort by Relevancy"
                            arrow={{
                                pointAtCenter: true,
                            }}
                            >
                            <Button>Sort by Relevancy</Button>
                            </Dropdown>
                        </div>
                    </div>
                    <Row gutter={20}>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                      <Col span={8} className={`${styles.item} gutter-row`}><Course displayType={'grid'}/></Col>
                     </Row></> ) : 
                     <>
                     <Row gutter={20}>
                     <Col span={6} className={`${styles.item} gutter-row`}>
                     <div className={`${styles.panelHead} flex between`}>
                     <h2> Filter by</h2>
                     </div>
                            <FilterBar />
                     </Col>
                     <Col span={18} className={`${styles.item} gutter-row`}>
                     <div className={`${styles.panelHead} flex between`}>
                     <h2>Showing 620 courses</h2>
                     <div>
                         <Dropdown
                         menu={{
                             items,
                         }}
                         placement="Sort by Relevancy"
                         arrow={{
                             pointAtCenter: true,
                         }}
                         >
                         <Button>Sort by Relevancy</Button>
                         </Dropdown>
                     </div>
                 </div>
                     <Row gutter={20}>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                      <Col span={24} className={`${styles.item} gutter-row`}><Course displayType={'single'} /></Col>
                     </Row>
                     </Col>
                    
                    </Row></>
                     }
                    
                  
                    </div>
                </div>
            </div>
    </div>
  )
}

export default index