<<<<<<< HEAD:client/src/components/pages/ProductView.js
import e from 'express';
import React from 'react';
// import '../../assets/stylesheets/style.css';
=======
import React from "react";
>>>>>>> 77c6c1f8b508cf5a6b9d78b8e86396ccd812b2a5:client/src/components/ProductView/index.js

const handleInputChange = () => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  // Based on the input type, we set the state of either email, username, and password
  if (inputType === "email") {
    setEmail(inputValue);
  } else if (inputType === "userName") {
    setUserName(inputValue);
  } else {
    setPassword(inputValue);
  }
};
function ProductView({ currentPage, handlePageChange }) {
  return (
    <div>
      <img></img>
      <button>Buy it now!</button>
      <form className="review-form">
        <input>
          <input
            value={review}
            name="review"
            onChange={handleInputChange}
            type="text"
            placeholder="review"
          />
        </input>
      </form>
    </div>
  );
}
export default ProductView;
