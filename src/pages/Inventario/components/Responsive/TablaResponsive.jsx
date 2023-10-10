import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "../../../../styles/dataTable.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import FormAgregar from "../FormAgregar";

const url = "https://inventoryplus.cyclic.app/products";

const TablaResponsive = () => {
  const [products, setProducts] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [formDataEdit, setFormDataEdit] = useState({
    _id: "",
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    img: "",
    date_of_expiry: null,
  });

  const toggleBodyOverflow = (shouldHideOverflow) => {
    document.body.style.overflow = shouldHideOverflow ? "hidden" : "auto";
  };

  const getProducts = async () => {
    const respuesta = await axios.get(url);
    setProducts(respuesta.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleSeccion = (type) => {
    if (type === 1) {
      setVisibleForm(!visibleForm);
      toggleBodyOverflow(!visibleForm);
    }

    if (type === 2) {
      setVisibleEdit(!visibleEdit);
    }
  };

  const handleProductoAgregado = () => {
    getProducts();
    toggleSeccion(1);
    addToast();
  };

  const handleProductoEditado = (product) => {
    setFormDataEdit(product);
    getProducts();
    toggleSeccion(2);
  };

  const handleProductoEliminado = async (id) => {
    const result = await Swal.fire({
      title: "¿Seguro que deseas eliminar este producto?",
      text: "Este paso no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background: "#fff0c9",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Eliminemoslo!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(url + "/" + id);
        deleteSucces();
        getProducts();
      } catch (error) {
        console.error("Error al eliminar el producto", error);
        Swal.fire("Error", "Ocurrió un error al eliminar el producto", "error");
      }
    }
  };

  // Toast
  const deleteSucces = () => {
    toast.error("Producto Eliminado", {
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

  const addToast = () => {
    toast.success("Producto agregado!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="container-table">
      <h2 className="text-5xl text-color-crema underline mb-4 w-full text-center">Productos</h2>
      <div className="dataTable ">
        <div className="search flex justify-between mb-4 p-2">
          <div className=" flex items-center gap-1">
            <input type="text" placeholder="Buscar..." className="p-2 bg-white outline-none border-b-2 duration-300 border-color-crema" />
          </div>
        </div>
        <table className="bg-none">
          <thead></thead>
          <tbody className="bg-transparent">
            {products.map((product, i) => (
              <tr key={product._id} className="text-center text-md text-color-crema bg-color-cafe-claro shadow-neumorphicTr mb-6 rounded-md">
                <td data-label={"#"}>{i + 1}</td>
                <td data-label={"Nombre:"}>{product.name}</td>
                <td data-label={"Cantidad:"}>{product.quantity}</td>
                <td data-label={"Precio:"}>${new Intl.NumberFormat("es-cl").format(product.price)}</td>
                <td data-label={"Categoria:"}>{product.category}</td>
                {product.category === "Alimento" ? (
                  <td data-label={"Fecha vencimiento:"}>{product.date_of_expiry.toString().split("T")[0]}</td>
                ) : null}

                <td className="flex justify-center">
                  {product.img.startsWith("data:image") ? (
                    <img src={product.img} alt={product.name} className="h-24 w-24 object-cover rounded-full border border-color-crema" />
                  ) : (
                    <img src={product.img} alt={product.name} className="h-24 w-24 object-cover rounded-full border border-color-crema" />
                  )}
                </td>
                <td className="flex justify-center">
                  <button
                    className="bg-warning text-black px-3 py-1 rounded-[5px] mr-1 ml-1"
                    onClick={() => {
                      console.log(product);
                    }}
                  >
                    <FaEdit size={25} />
                  </button>
                  <button
                    className="bg-danger text-white px-3 py-1 rounded-[5px] mr-1 ml-1"
                    onClick={() => {
                      handleProductoEliminado(product._id);
                    }}
                  >
                    <FaTrashAlt size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form Agregar */}
      {visibleForm && <FormAgregar onClose={() => toggleSeccion(1)} onProductoAgregado={handleProductoAgregado} />}
      <div className="md:hidden w-full right-0 bottom-0 z-10 sticky flex justify-end pb-4 mx-0">
        <button className="rounded-full text-color-crema" onClick={() => toggleSeccion(1)}>
          <IoIosAddCircle size={50} />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TablaResponsive;
