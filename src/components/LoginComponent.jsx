import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginComponent() {

  const [formObj, setFormObj] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleForm = (key, value) => {
    // modifica l'oggetto form
    setFormObj((form) => {
      return {
        ...form,
        [key]: value,
      };
    });
  };

  const fetchUser = async () => {
    const baseEndpoint = "http://localhost:8080/auth/login";
    const header = {
        "Content-type" : "application/json"
    };
    const body = {
        username : formObj.username ,
        password : formObj.password
    }

    try {
        const response = await fetch ( baseEndpoint , {
            method : "POST" ,
            headers : header ,
            body : JSON.stringify(body)
        } );

        const data = await response.json ();

        localStorage.setItem("token", data.token)
        console.log(data);
        console.log ( localStorage.getItem("token") );



    } catch ( error ) {
        console.log ( error );
    }

};

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUser();
          // navigate("/home");
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username address</Form.Label>
          <Form.Control
            value={formObj.username}
            onChange={(e) => handleForm("username", e.target.value)}
            type="text"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={formObj.password}
            onChange={(e) => handleForm("password", e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginComponent;
