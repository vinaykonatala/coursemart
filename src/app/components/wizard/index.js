import React from 'react'
import styles from './wizard.module.css'

function index() {
  return (
    <div className={styles.wizard}>
        <div className='container'>
            <div className='content'>
                 <h1>How to start learning in a coursemart?</h1>

                 <div className=''>
                    <div className=''>
                      <div className=''>
                         <SearchOutlined />
                      </div>
                      <div>
                       <b> 1. Explore Class </b><br/>
                       <p>Explore all classes because we have many interesting classes</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className=''>
                      <FileSearchOutlined />
                      </div>
                      <div>
                       <b> 1. Explore Class </b><br/>
                       <p>Explore all classes because we have many interesting classes</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className=''>
                         <SearchOutlined />
                      </div>
                      <div>
                       <b> 1. Explore Class </b><br/>
                       <p>Explore all classes because we have many interesting classes</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className=''>
                         <SearchOutlined />
                      </div>
                      <div>
                       <b> 1. Explore Class </b><br/>
                       <p>Explore all classes because we have many interesting classes</p>
                      </div>
                    </div>
                 </div>
            </div>
          
        </div>
    </div>
  )
}

export default index