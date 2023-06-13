import React, { useState} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyValidate from "./Validation/MyValidate";
import Alert from "./Alert.js";

export const Home = () => {
  const data = { to: "", subject: "", message: "" };
  const [sendToData, setSendToData] = useState(data);

  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    },3000);
  };

  const handleChange = (event) => {
    setSendToData({ ...sendToData, [event.target.name]: event.target.value });
  };

  const HandleSendData = (event) => {
    event.preventDefault();
    console.log(sendToData);
    setErrors(MyValidate(sendToData));

    fetch("http://localhost:8080/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendToData),
    }).then((res) => {
      if (res.status === 200) {
        console.log(
          "%cMessage send Successfully !",
          "color: green; background: lightgreen; font-size: 10px",
          res.status
        );
        ShowAlert("We are done here", "success");
      } else {
        console.log(
          "%cMessage not send Successfully !",
          "color: black; background: #FF7377; font-size: 10px",
          res.status
        );
         ShowAlert("Message didn't send Successfully" , "danger");
      }
    }); 
      
    setSendToData("");

  };

  return (
    <>
      <Alert  alert={alert}/>
      <Form className="container">
        <h3 className="mt-4 text-center text-info">
          Welcome to SendMail APP with SMTP
        </h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            placeholder="to:name@example.com"
            type="email"
            value={sendToData.to}
            name="to"
            onChange={handleChange}
            required
          />
          {errors.to && <p style={{ color: "red" }}>{errors.to}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Control
            type="text"
            placeholder="subject"
            name="subject"
            value={sendToData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="message"
            name="message"
            value={sendToData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </Form.Group>
        <Button
          variant="primary"
          className="mt-4"
          type="submit"
          onClick={HandleSendData}
          ShowAlert={ShowAlert}
        >
          Send
        </Button>
      </Form>
      <div className=" text-center border border-info container rounded-top  rounded-bottom  mt-4">
      <h5 className="text-danger text-center mt-3">"If this field is cleared then you can re-fill again"</h5>
      <hr></hr>
        <p>Email : <span>{sendToData.to}</span> </p>
        <p>Subject :<span> {sendToData.subject}</span> </p>
        <p>Message :<span> {sendToData.message}</span></p>
      </div>
    </>
  );
};
