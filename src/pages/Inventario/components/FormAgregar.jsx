import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import axios from "axios";

const url = "https://inventoryplus.cyclic.app/products";

const FormAgregar = (props) => {
  const [visibleForm] = useState(false);
  const [baseImg, setBaseImg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Insumos");
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: selectedCategory,
    img: "",
    date_of_expiry: new Date(Date.now()).toLocaleDateString(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(url, formData);
    console.log(data);
    props.onProductoAgregado();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const closeButtonHandler = () => {
    props.onClose(!visibleForm);
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;

    setSelectedCategory(selectedValue);
    setFormData((prev) => {
      return {
        ...prev,
        category: selectedValue,
      };
    });
  };

  // Función para manejar la selección de la imagen
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImg(base64);

    setFormData((prev) => {
      return {
        ...prev,
        img: base64,
      };
    });
  };

  // base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="inset-0 z-20 flex items-start justify-center absolute backdrop-blur-md backdrop-filter h-screen overflow-y-auto">
      <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md dark:bg-color-cafe-oscuro mt-4 ">
        <div className="close-btn flex justify-end items-center rounded-[20px] cursor-pointer text-danger-600">
          <RiCloseCircleLine onClick={closeButtonHandler} size={25} />
        </div>
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Agregar Producto</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Nombre del producto :
              </label>
              <input
                id="username"
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white text-black border rounded-md focus:outline-none focus:ring"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-white" htmlFor="quantity">
                Cantidad :
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring text-black"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-white" htmlFor="price">
                Precio :
              </label>
              <input
                id="price"
                type="number"
                name="price"
                className="block w-full px-4 py-2 mt-2 bg-white border  rounded-md focus:outline-none focus:ring text-black"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="category">
                Categoria :
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md  focus:outline-none focus:ring text-black"
                value={selectedCategory}
                onChange={handleCategoryChange}
                name="category"
              >
                <option value="Insumos">Insumos</option>
                <option value="Alimento">Alimento</option>
              </select>
            </div>
            {selectedCategory !== "Insumos" && (
              <div>
                <label className="text-white" htmlFor="date_of_expiry">
                  Fecha :
                </label>
                <input
                  id="date_of_expiry"
                  name="date_of_expiry"
                  type="date"
                  className="block w-full px-4 py-2 mt-2  bg-white rounded-md focus:outline-none focus:ring"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white pb-1">Imagen :</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 
                      32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-sm font-medium text-indigo-600 hover:text-indigo-500 
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 w-[45px]"
                    >
                      <span className="text-black">Elegir</span>
                      <input
                        id="file-upload"
                        name="img"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
                        required
                      />
                    </label>
                    <p className="pl-1 text-white"> una imagen para el producto</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF</p>
                </div>
              </div>
            </div>
            {baseImg && <img src={baseImg} alt="No Image" />}
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-success rounded-md 
            hover:bg-pink-700 focus:outline-none focus:bg-success-850"
            >
              Guardar
            </button>
            <button
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-danger rounded-md 
            hover:bg-pink-700 focus:outline-none focus:bg-danger-850"
              onClick={closeButtonHandler}
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormAgregar;
