import React, { useState }  from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Form ,Input, Button } from "antd";

const Signup = () => {

const [Data, setData] = useState(null)

console.log(Data)

  const handleSubmit = async(values) =>{
    console.log("Ye data araha h form se",values)
   
    try {
      const response = await axios.post('http://localhost:5001/auth/signup',values)
      
        console.log("Apna  BAckend response h  ", response)
        if(response.status === 200){
          setData(response.data)
          toast.success(response?.data?.message);
        }
        else{
          console("good Vibes")
          toast.error("Something went wrong. Please try again!");
        }
      
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Network Error")

    }
   

  } 


  
  return (
    <>
      <Form
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email!',
          }]}

      >
        <Input/>
      </Form.Item>


      <Form.Item
        label="Password"
        name="password"

      >
        <Input.Password />
      </Form.Item>



      <Form.Item label={null}>
        <Button htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
    <ToastContainer/>
    </>
  );
};

export default Signup;
