/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Head from "next/head";
import DataTable from "../../app/components/Datatable/Datatable";
import { Button, Space, Tag, Avatar, Modal} from "antd";
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import FormComponent from "../../app/components/Form/FormComponent";
import CreateInstitute from '/src/app/components/createInstitute'
import Sidebar from '/src/app/components/sidebar'

import { Input } from 'antd';
const { Search } = Input;
import '../globals.css'
import styles from './institute.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://bravethem-backend.vercel.app/courses");
  const data = await res.json();
  return {
    props: { courses: data },
  };
};
const Courses = ({ courses }) => {
  const handleDelete = () => console.log('Delete clicked');
  const handleEdit = () => console.log('Edit clicked')
  const columns = [
    {
      title: "Faculity Name",
      dataIndex: "title",
      key: "faculity",
    },
    {
      title: "Designation",
      dataIndex: "designantion",
      key: "designantion",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Education",
      dataIndex: "education",
      key: "education",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
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
          <h2>Dashboard</h2>
      <div className='flex center '>
                <div className={styles.search}>
                <Search
                    placeholder="Search course"
                    allowClear
                    size="large"
                    onSearch={onSearch}
                    shape="round"
                    style={{
                        width: 400,
                    }}
                    />
                </div>
                <div className=''>
                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
                </div>
            </div> 
            </div>
        <Sidebar />

        <div className={styles.body}>
        

          <div className="flex between mb-2">
              <h2>Institute Details</h2>
              {/* <Button  size="large" type="primary" onClick={showModal}>Create Faculity</Button> */}
          </div>
          <div className=''>
            <CreateInstitute />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Courses;
