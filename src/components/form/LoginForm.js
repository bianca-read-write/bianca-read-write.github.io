import React, { useState } from "react";

export const LoginForm = (props) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => setCode(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://us-central1-deep-chimera-324914.cloudfunctions.net/authorize",
        {
          headers: {
            Authorization: code,
          },
        }
      );
      const json = await res.json();
      props.onSuccess && props.onSuccess(json);
    } catch (e) {
      props.onFailure && props.onFailure();
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit} id="cf-1" className="contact-form login-form">
      <div className="form-group form-group-lg mb-0r">
        <label
          className="form-label-lg above after"
          style={{ display: "none" }}
          htmlFor="cf-1-code"
        >
          Access code
        </label>
        <input
          autocomplete="off"
          name="code"
          className="form-control form-control-lg"
          id="cf-1-code"
          placeholder="Please enter the code included with your invitation"
          value={code}
          disabled={loading}
          style={{ minHeight: "70px", textAlign: "center" }}
          onChange={handleInputChange}
        ></input>
        <div className="form-group form-group-lg mb-0 text-right">
          <button
            type="submit"
            className="btn btn-outline-primary text-uppercase"
            style={{ minHeight: "70px", marginTop: "1rem" }}
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
