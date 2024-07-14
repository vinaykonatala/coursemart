/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Head from "next/head";
import DataTable from "../../app/components/Datatable/Datatable";
import { Button, Space, Tag, Avatar, Modal } from "antd";
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import FormComponent from "../../app/components/Form/FormComponent";
import Header from '/src/app/components/header'
import Sidebar from '/src/app/components/sidebar'

import { Input } from 'antd';
const { Search } = Input;
import '../globals.css'
import styles from './create.module.css'

// export const getStaticProps = async () => {
//   const res = await fetch("https://bravethem-backend.vercel.app/courses");
//   const data = await res.json();
//   return {
//     props: { courses: data },
//   };
// };
const Courses = ({ courses }) => {
  const handleDelete = () => console.log('Delete clicked');
  const handleEdit = () => console.log('Edit clicked')
  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Instructor Id",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "No of Reviews",
      dataIndex: "numReviews",
      key: "numReviews",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Sessions",
      dataIndex: "sessions",
      key: "sessions",
    },
    {
      title: "Students Enrolled",
      dataIndex: "studentsEnrolled",
      key: "studentsEnrolled",
    },
    {
      title: "Course Duration",
      dataIndex: "courseDuration",
      key: "courseDuration",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <Tag key={text}>{text.toUpperCase()}</Tag>,
    },
    {
      title: "Action",
      key: "9",
      render: () => (
        <Space size="middle">
          <EditOutlined  onClick={() => handleEdit()}/>
          <DeleteOutlined  danger onClick={() => handleDelete()} />
          {/* <Button type="primary" onClick={() => handleEdit()}>Edit</Button>
          <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button> */}
        </Space>
      ),
    },
  ];

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Courses List</title>
        <meta name="keywords" content="Courses"></meta>
      </Head>
      {/* <Header /> */}
      <div className={styles.main}>
        <div className={`${styles.header} flex center between`}>
          <h2>Create Course</h2>
      <div className='flex center '>
             
                <div className=''>
                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
                </div>
            </div> 
            </div>
        <Sidebar />

        <div className={styles.body}>
 

    
          <FormComponent />
        
        </div>
      </div>
    
    </div>
  );
};

export default Courses;
