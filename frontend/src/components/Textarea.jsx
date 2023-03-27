import React from "react";

const Textarea = () => {
  return (
    <div>
      <form action="/">
        <p>
          <label for="w3review">Review of W3Schools:</label>
        </p>
        <textarea id="w3review" name="w3review" rows="4" cols="50">
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Textarea;
