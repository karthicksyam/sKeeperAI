import React, { useState, useRef, useEffect } from "react";
import "../Login/Login.css";
import AlMascoLogo from "../../assets/almasco-logo.png";
import SkeeperAILogo from "../../assets/sKeeperAI-logo.png";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

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

        <>
          {success ? (
            <section>
              <h1>Youre logged in</h1>
              <br />
              <p>
                <a href="#"> Go to Home</a>
              </p>
            </section>
          ) : (
            <div className="login-container">
              <div className="flavour-text">
                <div className="welcome-text">
                  <h1>Welcome!</h1>
                </div>
                <div className="login-text">
                  <h2>Login</h2>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <div className="empid-input">
                    {/* <div className="emp-id-text">EmpID</div> */}
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      placeholder=""
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
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
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                    />
                  </div>
                  <div className="submit-button">
                    <button>Login</button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Login;
