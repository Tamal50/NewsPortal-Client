import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const AddNews = () => {
  const [productFrom, setProductFrom] = useState({});
  // const { from } = { from: { pathname: "/" } };
  // const history = useHistory();
  const handleOnChange = (e) => {
    const newForm = { ...productFrom };
    newForm[e.target.name] = e.target.value;
    console.log(newForm);
    setProductFrom(newForm);
    console.log(productFrom);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch("https://newsportalhj.herokuapp.com/addNews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productFrom),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Your product added successfully");
          // history.replace(from);
        }
      });
  };
  return (
    <div>
      <h3>Add News</h3>
      <form onSubmit={handleAddProduct}>
        <textarea
          rows="1"
          cols="50"
          placeholder="Enter Your Name here..."
          name="Name"
          onChange={handleOnChange}
          value={productFrom.name}
        ></textarea>
        <br></br>
        <textarea
          rows="1"
          cols="50"
          placeholder="Enter Title here..."
          name="Title"
          onChange={handleOnChange}
          value={productFrom.title}
        ></textarea>
        <br></br>
        <textarea
          rows="1"
          cols="50"
          placeholder="Enter Imageurl here..."
          name="Imageurl"
          onChange={handleOnChange}
          value={productFrom.url}
        ></textarea>
        <br></br>
        <p>* Use imgdb for better service</p>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter Decryption here..."
          name="Decryption"
          onChange={handleOnChange}
          value={productFrom.decryption}
        ></textarea>
        <br></br>
        <h6>Catagory</h6>
        <select onChange={handleOnChange} value={productFrom.catagory} name="catagory" >
          <option>
            Sport
          </option>
          <option>
            Entertainment
          </option>
          <option>
            Political
          </option>
          <option>
            Business
          </option>
        </select>
        <br></br>
        <br></br>
        <button className="btn btn-primary" type="submit">
          ADD Product
        </button>
      </form>
    </div>
  );
};

export default AddNews;
