import { Button, Input, Space } from "antd";
import axios from "axios";
import React, { useState } from "react";

export const Login = () => {
  sessionStorage.clear();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const requestLogin = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/login",
        data: inputs,
        withCredentials: true,
      });
      if (response.status === 200) {
        alert(response.data.msg);
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="center">
      <Space direction="vertical" size="small">
        <Input
          value={inputs.username}
          name="username"
          placeholder="username"
          onChange={onChangeHandler}
        />
        <Input
          type="password"
          value={inputs.password}
          placeholder="password"
          name="password"
          onChange={onChangeHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") requestLogin();
          }}
        />
        <Button
          type="primary"
          size="large"
          style={{ width: "100%", marginTop: "1rem" }}
          onClick={requestLogin}
        >
          LOGIN
        </Button>
      </Space>
    </div>
  );
};
