import React from 'react'
import Header from '/src/app/components/header'
import styles from './single.module.css'
import '../globals.css'
import { Image, Anchor, Collapse, Row, Col, Button } from 'antd';
import { CheckOutlined, SafetyCertificateFilled, SafetyCertificateOutlined,UserOutlined, FieldTimeOutlined , PhoneFilled} from '@ant-design/icons';

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const points = ['What is Node.js?', 'History and evolution', 'Use cases and scenarios']

const items = [
{
  key: '1',
  label: <b>Introduction to Node.js</b>,
  children: points.map((item, key) => <li key={item} className={styles.points}>{item}</li>),
},
{
  key: '2',
  label: 'Installing Node.js',
  children: <p>{text}</p>,
},
{
  key: '3',
  label: 'Basics of JavaScript for Node.js',
  children: <p>{text}</p>,
},
{
    key: '4',
    label: ' Node.js Modules and npm',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'File System Operations',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'Introduction to Express.js',
    children: <p>{text}</p>,
  },{
    key: '7',
    label: 'Data Storage and Databases',
    children: <p>{text}</p>,
  },
  {
    key: '8',
    label: 'RESTful APIs',
    children: <p>{text}</p>,
  },
  {
    key: '9',
    label: 'Authentication and Authorization    ',
    children: <p>{text}</p>,
  },{
    key: '10',
    label: ' Error Handling and Debugging',
    children: <p>{text}</p>,
  },

];
const onChange = (key) => {
    console.log(key);
  };

const index = () => (




  <div className="App">
    <div className='main'>
        <Header />
        <div className={styles.banner}>
            <div className='container'>
            <Row gutter={20}>
                 <Col span={17} className={`${styles.item} gutter-row`}>
                <div className={styles.content}>
                    <h1>The Complete Node.js Developer Course</h1>
                    <p>{`Take your JavaScript skills to the server-side! Learn how to fully craft your site's backend using Express, 
                        the most popular back-end JavaScript framework! You will also 
                        learn how to use a non-relational database, MongoDB.`}</p>
                   <div className={`${styles.rating} flex center`}>
                        <Image src={"https://codewithmosh.com/_next/static/media/4.5.fbc139f3.svg"} alt="sample" width={'100px'} preview={false} />
                        <Anchor className={styles.ratingText} to="" >6000 Students</Anchor>
                    </div> 
                </div>
                </Col>
                </Row>
            </div>
            
            
        </div>
        <div className=''>
            <div className='container'>
        
        <Row gutter={20}>
        <Col span={17} className={`${styles.item} gutter-row`}>
        <div className={styles.learnPoints}>
            <div className='container'>
                <div className={styles.content}>
                    <h2>{`What you'll learn`}</h2>
                    <ul>
                        <li><CheckOutlined /> Create Express web servers and APIs</li>
                        <li><CheckOutlined /> Use cutting-edge ES6/ES7 JavaScript</li>
                        <li><CheckOutlined /> Create real-time web apps with SocketIO</li>
                        <li><CheckOutlined /> Build, test, and launch Node apps</li>
                        <li><CheckOutlined /> Store data with Mongoose and MongoDB</li>
                        <li><CheckOutlined /> Deploy your Node apps to production</li>
                        <li><CheckOutlined /> Completely refilmed for 3rd edition</li>
                        <li><CheckOutlined /> Completely refilmed for 3rd edition</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.courseContent}>
            <div className='container'>
                <h2>Course content</h2>
                <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
            </div>
        </div>

        <div className={styles.learnPoints}>
            <div className='container'>
                <div className={styles.content}>
                    <h2>Key Features</h2>
                    <ul>
                        <li><FieldTimeOutlined /> 40 Hours Course Duration</li>
                        <li><SafetyCertificateOutlined /> 100% Job Oriented Training</li>
                        <li><UserOutlined />  Industry Expert Faculties</li>
                        <li><CheckOutlined /> Free Demo Class Available</li>
                        <li><CheckOutlined /> Completed 500+ Batches</li>
                        <li><SafetyCertificateFilled /> Certificate of completion</li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.learnPoints}>
            <div className='container'>
                <div className={styles.content}>
                    <h2>Prerequisites</h2>
                    <ul>
                        <li><CheckOutlined /> <span className={styles.txt}>A basic knowledge of CLI tools and Linux administration</span></li>
                        <li><CheckOutlined /> <span className={styles.txt}>Some experience of the javascript language</span></li>
                        <li><CheckOutlined /> <span className={styles.txt}>A basic understanding of how Docker and containers work</span></li>
                        <li><CheckOutlined /> <span className={styles.txt}>Build, test, and launch Node apps</span></li>
                        <li><CheckOutlined /> <span className={styles.txt}>Store data with Mongoose and MongoDB</span></li>
                        <li><CheckOutlined /> <span className={styles.txt}>Deploy your Node apps to production</span></li>
                        
                    </ul>
                </div>
            </div>
        </div>
</Col>

<Col span={7} className={`${styles.priceBox} gutter-row`}>
   <div className={styles.priceBlock}>
   <Image
       height={150}
       width={'100%'}
             src={'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=750&q=75'}
             preview={false}
             alt="test"
       />

        <div className=''>
            <div className={styles.price}>
              <b>  9000 INR </b> <span>20000</span> 60% off
            </div>
            <div className=''>
            <Button type="primary" size="large"  block>
               Buy this Course
            </Button>

            <span className={styles.smallText}>100% Money-Back Guarantee</span>
            </div>


        </div>

        <div className={styles.contactBlock}>
            <p>Have Queries? Ask our Experts</p>
            <div className={styles.dailBlock}>
            <PhoneFilled /> 
            <div className={styles.dail}>
               <b> + 91 7702890893</b>
               <span className={styles.smalltext}>Available 24x7 for your queries</span>
            </div>
            </div>
        </div>
   </div>
</Col>
        </Row>
        </div>
        </div>

    </div>


  </div>
);

export default index;