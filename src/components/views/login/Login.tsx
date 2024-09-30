import { useState } from "react";
import { commonApis } from "../../../hook/commonApi";

const apiUrl = "/auth/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const body = {
      email: email,
      password: password,
    };
    const res = await commonApis.post(apiUrl, body);
    console.log(res);
  };
  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitLogin}>로그인</button>
    </div>
  );
};

export default Login;
