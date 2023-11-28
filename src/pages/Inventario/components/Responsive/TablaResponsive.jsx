import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "../../../../styles/dataTable.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import FormAgregar from "../FormAgregar";
import FormEditar from "../FormEditar";

const url = "https://inventoryplusbackend.onrender.com/products";

const TablaResponsive = () => {
  const [products, setProducts] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [formDataEdit, setFormDataEdit] = useState({
    _id: "",
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    img: "",
    date_of_expiry: null,
  });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));

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
      window.scrollTo(0, 0);
    }

    if (type === 2) {
      setVisibleEdit(!visibleEdit);
      toggleBodyOverflow(!visibleEdit);
      window.scrollTo(0, 0);
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
      confirmButtonText: "Sí, Eliminemoslo!",
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
      <p className="text-center mt-4 text-lg text-color-crema md:mb-4">
        En este apartado podrás ver todos los productos registrados en el sistema, además de poder agregar, editar y eliminar productos.
      </p>
      <div className="dataTable ">
        <div className="search flex justify-between mb-4 p-2">
          <div className=" flex items-center gap-1">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 bg-white outline-none border-b-2 duration-300 border-color-crema"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <table className="bg-none">
          <thead></thead>
          <tbody className="bg-transparent">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-md text-color-crema bg-color-cafe-claro shadow-neumorphicTr mb-6 rounded-md">
                  No existen productos o producto no encontrado.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product, i) => (
                <tr key={product._id} className="text-center text-md text-color-crema bg-color-cafe-claro shadow-neumorphicTr mb-6 rounded-md">
                  <td data-label={"#"}>{i + 1}</td>
                  <td data-label={"Nombre:"}>{product.name}</td>
                  <td data-label={"Cantidad:"}>{product.quantity}</td>
                  <td data-label={"Precio:"}>${new Intl.NumberFormat("es-cl").format(product.price)}</td>
                  <td data-label={"Categoria:"}>{product.category}</td>
                  {product.category === "Alimento" ? (
                    <td data-label={"Fecha vencimiento:"}>{product.date_of_expiry.toString().split("T")[0]}</td>
                  ) : null}
                  <td data-label={"Fecha Ingreso:"}>{product.date_added.toString().split("T")[0]}</td>

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
                        handleProductoEditado(product);
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
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Form Agregar */}
      {visibleForm && <FormAgregar onClose={() => toggleSeccion(1)} onProductoAgregado={handleProductoAgregado} />}
      {/* Form Editar */}
      {visibleEdit && <FormEditar onClose={() => toggleSeccion(2)} onProductoEditado={handleProductoEditado} rest={formDataEdit} />}
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
