// import React from 'react'
import "./profile.scss";
import { Alert, Card, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import { message } from "antd";

const success = () => {
  message.success("Data Saved");
};
const error = () => {
  message.error("sorry, there was a problem");
};
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // axios.headers.setDefault // in app component
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/find/${userId}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onFinish = (values) => {
    const userId = localStorage.getItem("userId");
    const config = {
      //change token with userToken
      headers: {
        token: localStorage.getItem("userToken"),
      },
    };
    console.log("Finish:", values);
    setLoading(true);
    // axios.put(`${process.env.REACT_APP_API_URL}/api/users/edit/${userId}`, values,config)
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/users/edit/${userId}`, values, config)
      .then(() => {
        setErrMsg("");
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/editPassword/${userId}`,
            { password: values.newPassword },
            config
          )
          .then(() => {
            success();
            setErrMsg("");
          })
          .catch((err) => {
            setErrMsg(err.message);
            console.log("new password error: " + err.message);
          });
      })
      .catch((err) => {
        error();
        setErrMsg(err.message);
      })
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
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="General Information"
        //   extra={<a href="#h">More</a>}
      >
        {/* {
          successMsg&&<Alert message={successMsg} type="success" />
        } */}

        {errMsg && <Alert message={errMsg} type="error" closable banner />}
        <Form
          form={form}
          layout="vertical"
          // layout="inline"
          // initialValues={{...userInfo, password : ""}}
          // initialValues={userInfo}
          initialValues={{ ...userInfo, password: "" }}
          name="horizontal_login"
          onFinish={onFinish}
        >
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="username"
                label="username"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: false,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="username"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="password"
                label="Current Password"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="email"
                label="Email"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: false,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  type="email"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="newPassword"
                label="New Password"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="New Password"
                  type="password"
                />
              </Form.Item>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-md-end justify-content-center">
            {/* button__firstDiv */}
            <Form.Item shouldUpdate className="mt-2 ">
              {() => (
                <Tooltip
                  title="Must change all fields to enable this button"
                  color={"#2db7f5"}
                  key={"#2db7f5"}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
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
            {/* </div> */}
          </div>
        </Form>
     
      </Card>
     
    </div>
  );
};

export default Profile;








