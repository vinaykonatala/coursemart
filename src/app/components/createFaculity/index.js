import React, { useState } from 'react'

import { Button, Dropdown, Col, Row, Form, Input,  message, Upload  } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './faculity.module.css'

const customizeRequiredMark = (label, { required }) => (
    <>
      {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
      {label}
    </>
  );
function index() {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
      setRequiredMarkType(requiredMarkValue);
    };
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };

      const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };

      const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
          <Form
    name="validate_other"
    initialValues={{
        requiredMarkValue: requiredMark,
      }}
    onFinish={onFinish}
    requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
    layout="vertical"
  
  >
         <Row gutter={40}> 
      <Col span={12}>
        <Form.Item
            name="name"
            label="Faculity Name"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name="designation"
            label="Designation"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name="Name"
            label="Faculity Name"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name="experience"
            label="Experience"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name="education"
            label="Education"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name="Languages"
            label="languages"
            rules={[
                {
                required: true,
                },
            ]}
        >
        <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      </Col>
    </Row>
    </Form>
    </div>
  )
}

export default index