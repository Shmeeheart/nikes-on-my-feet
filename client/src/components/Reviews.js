import React from "react";

function Reviews({ currentPage, handlePageChange }) {
    return(
        <div>
            <h4>Leave a Review</h4>
      <form className="form">
        <input
          value={review}
          name="review"
          type="text"
          placeholder="review"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
        
    )
}