import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login/Login.css";
import AlMascoLogo from "../../assets/almasco-logo.png";
import SkeeperAILogo from "../../assets/sKeeperAI-logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function submitData() {
    console.log("inside submit data: ", username, password);

    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        console.error("Failed to submit data", response.statusText);
      } else {
        console.log("Data Submitted successfully");
        navigate("/main");
      }
    } catch (error) {
      console.error("Error submitting data", error);
    }
  }

  return (
    <div className="login-page--container">
      <div className="mini-container-1">
        <img src={AlMascoLogo} alt="AlMascoLogo" />
      </div>
      <div className="mini-container-2">
        <div className="skeeper-logo-container">
          <img
            className="skeeper-image"
            src={SkeeperAILogo}
            alt="sKeeperAILogo"
          />
          <h2>
            <div className="undertext">Inventory Management System</div>
          </h2>
        </div>
        <div className="login-container">
          <div className="flavour-text">
            <div className="welcome-text">
              <h1>Welcome!</h1>
            </div>
            <div className="login-text">
              <h2>Login</h2>
            </div>
          </div>
          <form>
            <div className="inputs">
              <div className="empid-input">
                {/* <div className="emp-id-text">EmpID</div> */}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder=""
                  id="username"
                  autoComplete="off"
                  onChange={handleChangeUsername}
                  value={username}
                  required
                />
              </div>
              <div className="pass-input">
                {/* <div className="pass-text">Password</div> */}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder=""
                  id="password"
                  onChange={handleChangePassword}
                  value={password}
                  required
                />
              </div>
              <div className="submit-button">
                <button type="button" onClick={submitData}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
