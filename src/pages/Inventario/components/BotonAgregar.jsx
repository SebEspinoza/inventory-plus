import axios from "axios";
import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const url = "https://inventoryplus.cyclic.app/products";

const BotonAgregar = (props) => {
  const [visibleForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    img: "",
    date_of_expiry: null,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(url, formData);
    console.log(data);

    props.onProductoAgregado();
  };

  const closeButtonHandler = () => {
    props.onClose(!visibleForm);
  };

  return (
    <div className=" fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-filter">
      {/*Agregar Items */}
      <div className="text-color-cafe-oscuro flex justify-center items-center absolute top-0 left-0 w-[100%] h-[100%]">
        <form onSubmit={handleSubmit} className="w-[420px] bg-color-crema flex flex-col px-[50px] py-[30px] shadow-lg rounded-[20px]">
          <div className="close-btn ml-auto text-[28px]  flex justify-center items-center rounded-[20px] cursor-pointer text-danger-600">
            <RiCloseCircleLine onClick={closeButtonHandler} />
          </div>
          <h2 className="text-center text-[24px] font-bold mb-4">Agregar Producto</h2>
          <label htmlFor="name" className="text-[18px]">
            Nombre :
          </label>
          <input type="text" id="name" name="name" onChange={handleChange} />

          <label htmlFor="quantity" className="text-[18px]">
            Cantidad :
          </label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange} required />

          <label htmlFor="price" className="text-[18px]">
            Precio :
          </label>
          <input type="number" id="price" name="price" onChange={handleChange} required />
          <label htmlFor="category" className="text-[18px]">
            Categoria :
          </label>
          <input type="text" id="category" name="category" onChange={handleChange} required />
          <label htmlFor="date_of_expiry" className="text-[18px]">
            Fecha :
          </label>
          <input type="date" id="date_of_expiry" name="date_of_expiry" onChange={handleChange} required />

          <label htmlFor="img" className="text-[18px]">
            Link Imagen :
          </label>
          <input type="text" id="img" name="img" onChange={handleChange} required />

          <button
            className="btn bg-info-600 border-none text-white text-[18px] rounded-[5px]
              cursor-pointer pl-[7px] pr-[15px] mt-[20px] justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BotonAgregar;
