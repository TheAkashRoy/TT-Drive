import React,{useState} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from 'axios';
import Button from "@mui/material/Button";

function Generate() {
    const [text,setText]=useState("");
    const [code,setCode]=useState("");
    const find = async (event) => {

      event.preventDefault();
      let url ="https://ttd-one.vercel.app/find/";
      url=url.concat(code);
      console.log(url);
      axios.get(url)
      .then(function (response) {
        console.log(response.data);
        setText(response.data);
      })}
    // const [code,setCode]=useState("");
    // const [data,setData]=useState(
    //   {
    //     text:""
    //   }
    // );
    // const handleChange = (e) => {
    //   const value = e.target.value;
    //   setData({
    //     ...data,
    //     [e.target.name]: value
    //   });
    // };
    // const submit=(e)=>{
    //   e.preventDefault();
    //   const userText = {
    //     text: data.text,
    //   };
    //   console.log(userText);
    //   axios.post("https://ttd-one.vercel.app/insert", userText).then((response) => {
    //     console.log(response.status, response.data);
    //   });
    // }
    // const handleSubmit=(e)=>{
    //   e.preventDefault();
    //   const userText = {
    //     text: data.text,
    //   };
    //   console.log(userText);
    //   fetch("https://ttd-one.vercel.app/insert", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userText)
    //   })
    //   .then(response => response.json())
    //   .then(data => console.log(userText))
    //   .catch(error => console.error(error));
    // }

    const submit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('text', text);

      axios.post('https://ttd-one.vercel.app/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
        setCode(response.data);
      }).catch(error => {
        console.error(error);
      });

    };
  return (
    <div className='bg-[#EEEEEE]' >
      <div className='pt-24 px-10 text-center'>
      <p className='text-3xl mb-2 text-[#0B2447] font-semibold max-[640px]:text-2xl'>If you have code enter below:</p>
      <input className='text-2xl m-3 bg- rounded-lg p-1 text-[#0B2447]' value={code} onChange={(e) => setCode(e.target.value)}/>
      <Button
            variant="contained"
            color="success"
            size="large"
            href="/access"
            onClick={find}
          >
            Click here!
          </Button>
   
      </div>
      <form  onSubmit={submit}>
      <div className=' px-20 flex flex-col'>
      {/* <p className="text-4xl mb-4 text-[#393E46] font-semibold pt-3 max-[640px]:text-2xl text-center text-black">
          If you have code, then{" "}
          <Button
            variant="contained"
            color="success"
            size="large"
            href="/access"
          >
            Click here!
          </Button>
        </p> */}
      <p className='text-4xl mb-1 text-[#393E46] font-semibold pt-3 max-[640px]:text-2xl'>Enter text here</p><br/>
      <TextareaAutosize
      aria-label="minimum height"
      minRows={12}
      className=' mb-12 text-md'
      placeholder="Your text area"
      style={{ minWidth: 200,maxWidth:1800 }}
      name="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button className='text-2xl mb-4 bg-slate-200 rounded-xl p-2 text-[#393E46] w-36 font-semibold max-[640px]:text-lg shadow-xl' type='submit' >Upload</button>
    </div>
    </form>
    </div>
  )
}

export default Generate
