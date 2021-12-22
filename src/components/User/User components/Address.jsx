// import React from 'react'
// import "./profile.scss";
import { Alert, Card, Tooltip } from "antd";
import React, { useState, useEffect, useRef} from "react";
import { Form, Input, Button } from "antd";
import { HomeFilled, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { message } from 'antd';
// import {Form.Control} from 'react-bootstrap'
// const HorizontalLoginForm = () => {
    
  const success = () => {
    message.success('Data Saved');
  };
  const error = () => {
    message.error('sorry, there was a problem');
  };
const Address = () => {
  const [address, setAddress] =useState("esna")
    const [enableEdit, setEnableEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  // const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // To disable submit button at the beginning.
  const editBtn = useRef();
  const saveBtn = useRef();
  const dispaly = () => {
    setEnableEdit(true);
    saveBtn.current.style.display = "block";
    editBtn.current.style.display = "none";
    console.log(userInfo);
  };
  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem('userToken'))
   const userId = localStorage.getItem("userId")
    // axios.headers.setDefault // in app component
    setLoading(true);
    axios
      // .get(`http://localhost:5000/api/users/find/${userData._id}`)
      // .get(`http://localhost:5000/api/users/find/${userId}`)
      // .get(`https://noon-ecommerce.herokuapp.com/api/users/find/61965bc1d77aff0d40a1d006`,
      .get(`${process.env.REACT_APP_API_URL}/api/users/find/${userId}`,
       {
        
        headers: {
          'token': localStorage.getItem('userToken')
        }
      
      // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1NGNkYzI0MGFhNzlkNDYxMGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA3MjM0MCwiZXhwIjoxNjM5MzMxNTQwfQ.tfOeCrY3HjvmFwMqmF3t-ImY35Of75sx6bD-psAgabc"
    })
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
        // setUser(userInfo);
      
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message)
       
      }).finally(() => {
        setLoading(false);
      })
  }, []);
  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem('userToken'))
   const userId = localStorage.getItem("userId")
    // axios.headers.setDefault // in app component
    setLoading(true);
    axios
      // .get(`http://localhost:5000/api/users/find/${userData._id}`)
      // .get(`http://localhost:5000/api/users/find/${userId}`)
      // .get(`https://noon-ecommerce.herokuapp.com/api/users/find/61965bc1d77aff0d40a1d006`,
      .get(`${process.env.REACT_APP_API_URL}/api/orders/find/${userId}`,
       {
        
        headers: {
          'token': localStorage.getItem('userToken')
        }
      
      // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1NGNkYzI0MGFhNzlkNDYxMGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA3MjM0MCwiZXhwIjoxNjM5MzMxNTQwfQ.tfOeCrY3HjvmFwMqmF3t-ImY35Of75sx6bD-psAgabc"
    })
      .then((response) => {
        console.log(response.data);
        setAddress(response.data[response.data.length -1]);
        // setUser(userInfo);
      
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message)
       
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  const onFinish = (values) => {
    const userId = localStorage.getItem("userId")
    const config = {
      //change token with userToken
      headers: {
        token: localStorage.getItem("userToken"),
      },
    };
    console.log("Finish:", values);
    setLoading(true);
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/edit/${userId}`, values,config)
    .then(() => {success()})
    .catch((err) =>{error(); setErrMsg(err.message)} )
    .finally(() => setLoading(false));
  };

  if (loading) {
    return "loading...";
  }
  // if (errMsg) {
  //   return errMsg;
  // }
  return (
    <div className="profileComponent">
      {/* <h1>Profile</h1>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" /> */}
      {/*  */}
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="General Information"
        //   extra={<a href="#h">More</a>}
      >
        {/* {
          successMsg&&<Alert message={successMsg} type="success" />
        } */}

        {
          errMsg&&<Alert message={errMsg} type="error" closable/>
        }
        {/* <Space>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
  </Space> */}
           <Form
          form={form}
          layout="vertical"
          // layout="inline"
          // initialValues={userInfo}
          initialValues={{...userInfo, address: address, phone : "01006150263"}}

        
          name="horizontal_login"
          onFinish={onFinish}
        >
          {/*  */}
          
          {/* {console.log(userInfo.username)} */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="username"
                label="Name"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your firsr name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="address"
                label="Address"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address",
                  },
                ]}
              >
                <Input
                  prefix={<HomeFilled className="site-form-item-icon" />}
                  placeholder="Address"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="phone"
                label="Phone Number"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  placeholder="Phone Number"
                  type="number"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            <div
              className="col-md-6 col-lg-3"
              ref={saveBtn}
              style={{ display: "none" }}
            >
              <Form.Item shouldUpdate className="text-center" label=" ">
                {() => (
                  <Tooltip title="Must change all fields to enable this button" color={"#2db7f5"} key={"#2db7f5"}>
                  
                  <Button
                    type="primary"
                    // onClick={success}
                    // size="large"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Save
                  </Button>
                  </Tooltip>
                )}
              </Form.Item>
            </div>
            <div className="col-md-6 col-lg-3" ref={editBtn}>
              <Form.Item shouldUpdate className="text-center" label=" ">
                <Button
                  type="light"
                //   size="large"
                //   className="btn "
                //   style={{ background: "#F1F3FA" }}
                  onClick={dispaly}
                >
                  Edit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
        
      </Card>
      {/*fffffffffffffffffffffffffffffffffffffffffff  */}
      
     
    </div>
  );
};

export default Address;
