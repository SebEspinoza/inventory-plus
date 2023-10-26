import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const url = "https://inventoryplus.cyclic.app/users";

const FormEditar = (props) => {
  const [visibleForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(props.rest.role);
  const [formData, setFormData] = useState({
    _id: props.rest._id || "",
    username: props.rest.username || "",
    password: props.rest.password || "",
    email: props.rest.email || "",
    first_name: props.rest.first_name || "",
    last_name: props.rest.last_name || "",
    role: props.rest.role || Boolean,
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

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = await axios.put(url + "/" + props.rest._id, formData);
    console.log(data);
    props.onWorkerEditado();
    editToast();
  };

  const buttonHandler = () => {
    props.onClose(!visibleForm);
  };

  const editToast = () => {
    toast.warn("Producto editado!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;

    setSelectedCategory(selectedValue);
    setFormData((prev) => {
      return {
        ...prev,
        role: selectedValue,
      };
    });
  };

  return (
    <div className="inset-0 z-20 flex items-start justify-center absolute backdrop-blur-md backdrop-filter h-screen overflow-y-auto">
      <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md dark:bg-color-cafe-oscuro mt-4 ">
        <div className="close-btn flex justify-end items-center rounded-[20px] cursor-pointer text-danger-600">
          <RiCloseCircleLine onClick={buttonHandler} size={25} />
        </div>
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Editar trabajador</h1>
        <form onSubmit={handleEdit}>
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="username">
                Nombre de usuario :
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white text-black border rounded-md focus:outline-none focus:ring"
                onChange={handleChange}
                placeholder={formData.username}
              />
            </div>

            <div>
              <label className="text-white" htmlFor="email">
                Email :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring text-black"
                onChange={handleChange}
                placeholder={formData.email}
              />
            </div>

            <div>
              <label className="text-white" htmlFor="first_name">
                Nombre :
              </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                className="block w-full px-4 py-2 mt-2 bg-white border  rounded-md focus:outline-none focus:ring text-black"
                onChange={handleChange}
                placeholder={formData.first_name}
              />
            </div>

            <div>
              <label className="text-white" htmlFor="last_name">
                Apellido :
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                className="block w-full px-4 py-2 mt-2 bg-white border  rounded-md focus:outline-none focus:ring text-black"
                onChange={handleChange}
                placeholder={formData.last_name}
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="role">
                Rol :
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md  focus:outline-none focus:ring text-black"
                value={selectedCategory}
                onChange={handleCategoryChange}
                name="role"
              >
                <option value="true">Administrador</option>
                <option value="false">Trabajador</option>
              </select>
            </div>
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
              onClick={buttonHandler}
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default FormEditar;
