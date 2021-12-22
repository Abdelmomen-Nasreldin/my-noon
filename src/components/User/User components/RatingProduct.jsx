import React, { useState } from "react";
import { Button, Modal, Form, notification } from "antd";

import { Rate } from "antd";
import  axios  from 'axios';
// let OKK
const successMsg = type => {
    notification[type]({
      message: 'Rating Done',
      description:
        'Thank you for Feedback, this will help us improving our services',
    });
  };
const errMsg = type => {
    notification[type]({
      message: 'Rating Error',
      description:
        'we are sorry, try again later',
    });
  };
  // const rate = () => {};


const RatingProduct = ({prodId}) => {
  console.log("pppppppppp",prodId);
  // const rate = 


  const [visible, setVisible] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("")
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };






  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    // const [successMsg, setSuccessMsg] = useState("")
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Rate the Product"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        //   OKK()
        // successMsg('success')
        form

          .validateFields()
          .then((values) => {
            // form.resetFields();
            onCreate(values);
            axios.post(`${process.env.REACT_APP_API_URL}/api/ratings`, {
              productId: prodId,
              rating: [
                {
                  userId: localStorage.getItem("userId"),
                  value: values.rate,
                },
              ],
            }).then(() => {successMsg('success')}).catch(() => {errMsg('error')})
            // axios.put(`http://localhost:5000/api/`, values).then(() => {setSuccessMsg("ALL is Done"); setErrMsg("")})
          })
          .catch((info) => {
            console.log("Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        className="text-center"
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          rate: 3.5,
        }}
      >
        <Form.Item name="rate" className="">
          <Rate />
          {/* {successMsg && <Alert message={"Thanks"} type="success" />} */}
        </Form.Item>
      </Form>
    </Modal>
  );
};
  
  return (
    <div>
        {/* {successMsg && <Alert message={"Thanks"} type="success" />} */}
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Rate
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default RatingProduct;
