import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";
import Highlight from "react-highlight";


function Generate() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [oldCode, setOldCode] = useState("");
  const [data, setData] = useState("");

  const find = async (event) => {
    event.preventDefault();
    let url = "https://ttd-one.vercel.app/find/";
    url = url.concat(oldCode);
    console.log(url);
    axios.get(url).then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("text", text);

    axios
      .post("https://ttd-one.vercel.app/insert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        setCode(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#FFC288]">
      <div className=" p-20 flex flex-col textArea">
        <div className="access flex items-center justify-center mt-3 ">
          <div className="flex flex-row codeInput">
            <span className="text-3xl  p-0 text-[#393E46] font-semibold  max-[640px]:text-2xl hide" style={{fontSize:'1.5em'}}>
              Enter your code here
            </span>
            <input
              className="text-2xl mx-3 bg-[#FCECDD]  rounded-lg p-1 text-[#0B2447] w-48 input"
              style={{ height: "40px" }}
              value={oldCode}
              onChange={(e) => setOldCode(e.target.value)}
            ></input>
            <button
              className=" text-slate-800 font-semibold text-2xl bg-slate-100 mx-3 rounded-lg p-1 w-28 shadow-xl"
              style={{ height: "40px" }}
              onClick={find}
            >
              Submit
            </button>
          </div>
        </div>
        {data ? (
          <div>
            <Highlight className="bg-[#FCECDD] border-black border-2 border-dashed" >{data}</Highlight>
          </div>
        ) : (
          <form onSubmit={submit}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={15}
              className=" mt-4 mb-3 text-md "
              placeholder="Enter your texts, codes here and click the upload button to get a 4 character code"
              style={{ minWidth: 200, maxWidth: 1800 }}
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {code ? (
              <div className="mx-auto flex items-center justify-center">
                <p className=" text-2xl text-slate-800 font-semibold">
                  Your Code:
                </p>
                <div className="text-2xl text-slate-800 rounded-lg  ml-5">
                  {code}
                </div>
              </div>
            ) : (
              <div>
                <div className="mx-auto flex items-center justify-center">
                  <button className="text-slate-800 font-semibold text-2xl bg-slate-100 w-40 rounded-lg p-1 shadow-xl border-2  border-blue-800">
                    Upload
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Generate;
