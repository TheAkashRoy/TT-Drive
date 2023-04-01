import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import axios from 'axios';

function Generate() {
  const [code, setCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(code);

    axios.post('https://localhost:5000', {
      text: code,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="bg-[#393E46]">
      <div className=" p-20 ">
        <p className="text-4xl mb-4 text-[#393E46] font-semibold pt-3 max-[640px]:text-2xl text-center text-white">
          If you have code, then{" "}
          <Button
            variant="contained"
            color="success"
            size="large"
            href="/access"
          >
            Click here!
          </Button>
        </p>
        <br />
        <form method="post" onSubmit={handleSubmit}>
          <textarea
            className=" mb-12 text-md bg-[#EEEEEE]"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          >
            {code}
          </textarea>
          <br />
          <button
            className="text-3xl mb-12 bg-slate-200 rounded-xl p-2 text-[#393E46] font-semibold max-[640px]:text-xl shadow-2xl"
            type="submit"
          >
            Generate Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default Generate;
