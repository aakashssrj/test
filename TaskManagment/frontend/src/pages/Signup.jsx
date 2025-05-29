import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';

const Signup = () => {
  const onFinish = async (values) => {
    console.log('Success:', values);
    try{
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        Username: values.username,
        Password: values.password
      });
      console.log(res.data); // Handle the response as needed 
    
      if(res.data.success){
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        console.log("Signup Success")
      }
    
      else{
        console.log("Signup Failed")
      }  
    }
    catch(err){
        console.log(err)
      } 
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <h1>Signup</h1>

   
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <p>Signup to create an account</p>
    <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};
export default Signup;
