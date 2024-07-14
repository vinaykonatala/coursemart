import React, { useState, useRef } from 'react';
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Rate,
  Select,
  Space,
  Switch,
  Upload,
  Row,Col,Divider,Steps,
} from "antd";

import TextEditor from '../../../src/app/components/textEditor'

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const { Step } = Steps;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

// const [form] = Form.useForm();

const FormComponent = () => (
  <>
   {/* <Steps current={0}>
   <Step title="Step 1" description="This is step 1dfdf">
    sdfzd
          <Form name="dfdf" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
        </Step>
        <Step title="Step 2" description="This is step 2">
          <Form  onFinish={onFinish} layout="vertical">
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
        </Step>
        <Step title="Step 3" description="This is step 3">
          <p>Content of step 3</p>
        </Step>
   </Steps> */}
  <Form
    name="validate_other"
   
    onFinish={onFinish}
   
    layout="vertical"
  
  >
     <Row gutter={16}>
      <Col span={8}>
      <Form.Item
      name="title"
      label="Course Title"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="Price"
      label="Course Price"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

      </Col>
      <Col span={16}>
      <Form.Item
      name="description"
      rules={[
        {
          required: true,
        },
      ]}
      label="Description"
    >
      <TextArea rows={4} />
    </Form.Item>
      </Col>

    </Row>

    <Row gutter={16}>
      <Col span={8}>
      <Form.Item
      name="Price"
      label="Duration"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item
      name="Price"
      label="language"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item
      name="date"
      label="Start Date"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <DatePicker onChange={onChange} />
    </Form.Item>
      </Col>
    </Row>
  
    <Divider orientation="left">What you'll learn</Divider>
    <Row>
      <Col span={24}>
      <TextEditor />
      </Col>
    </Row>

    <Divider orientation="left">Key Features</Divider>
    <Row>
      <Col span={24}>
      <TextEditor />
      </Col>
    </Row>

    <Divider orientation="left">Course content</Divider>
    <Row>
      <Col span={24}>
      <Form.Item
      name="title"
      label="Title"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
      </Form.Item>
      <TextEditor />
      </Col>
      <Col span={24}>
      <Form.Item
      name="title"
      label="Title"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
      </Form.Item>
      <TextEditor />
      </Col>
    </Row>

    <Divider orientation="left">Prerequisites</Divider>
    <Row>
      <Col span={24}>
      <TextEditor />
      </Col>
    </Row>
   
  </Form>
  </>
);
export default FormComponent;
