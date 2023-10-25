/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import DataTable from "../app/components/Datatable/Datatable";
import { Button, Space, Tag } from "antd";
import FormComponent from "../app/components/Form/FormComponent";

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
          <Button type="primary" onClick={() => handleEdit()}>Edit</Button>
          <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Head>
        <title>Courses List</title>
        <meta name="keywords" content="Courses"></meta>
      </Head>
      <DataTable data={courses} columns={columns} />
      <FormComponent />
    </div>
  );
};

export default Courses;
