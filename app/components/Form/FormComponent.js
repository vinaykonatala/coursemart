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
} from "antd";
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

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
const FormComponent = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      active: true,
    }}
    style={{
      maxWidth: 600,
    }}
  >
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
    <Form.Item
      name="sessions"
      rules={[
        {
          required: true,
        },
      ]}
      label="Sessions"
    >
      <Form.Item name="sessions" noStyle>
        <Input />
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="price"
      rules={[
        {
          required: true,
        },
      ]}
      label="Price"
    >
      <Form.Item name="price" noStyle>
        <Input />
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="studentsEnrolled"
      rules={[
        {
          required: true,
        },
      ]}
      label="Students Enrolled"
    >
      <Form.Item noStyle>
        <Input />
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="numReviews"
      rules={[
        {
          required: true,
        },
      ]}
      label="No of Reviews"
    >
      <Form.Item noStyle>
        <Input />
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="courseDuration"
      rules={[
        {
          required: true,
        },
      ]}
      label="Course Duration"
    >
      <Form.Item noStyle>
        <Input />
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="instructor"
      label="Instructor"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select instructor!",
        },
      ]}
    >
      <Select placeholder="Please select instructor">
        <Option value={1}>Instructor 1</Option>
        <Option value={2}>Instructor 2</Option>
      </Select>
    </Form.Item>
    <Form.Item
      name="category"
      label="Category"
      rules={[
        {
          required: true,
          message: "Please select categories!",
          type: "array",
        },
      ]}
    >
      <Select mode="multiple" placeholder="Please select categories">
        <Option value={1}>Programming</Option>
        <Option value={2}>AI</Option>
        <Option value={3}>ML</Option>
      </Select>
    </Form.Item>

    <Form.Item
      rules={[
        {
          required: true,
        },
      ]}
      label="RangePicker"
    >
      <RangePicker />
    </Form.Item>

    <Form.Item name="active" label="Active" valuePropName="checked">
      <Switch />
    </Form.Item>

    <Form.Item name="rating" label="Rating">
      <Rate />
    </Form.Item>

    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">Reset</Button>
      </Space>
    </Form.Item>
  </Form>
);
export default FormComponent;
