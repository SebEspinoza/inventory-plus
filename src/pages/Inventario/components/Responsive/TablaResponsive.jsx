import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../../../styles/dataTable.css";

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
    }

    if (type === 2) {
      setVisibleEdit(!visibleEdit);
    }
  };

  const handleProductoAgregado = () => {
    getProducts();
    toggleSeccion(1);
  };

  const handleProductoEditado = (product) => {
    setFormDataEdit(product);
    getProducts();
    toggleSeccion(2);
  };

  const handleProductoEliminado = async (id) => {
    await axios.delete(url + "/" + id);
    getProducts();
  };
  return (
    <div className="container-table">
      <div className="dataTable ">
        <h2>Productos</h2>
        <div className="search">
          <input placeholder="Search" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <table>
          <thead></thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id} className="text-center text-md">
                <td data-label={"#"}>{i + 1}</td>
                <td data-label={"Nombre:"}>{product.name}</td>
                <td data-label={"Cantidad:"}>{product.quantity}</td>
                <td data-label={"Precio:"}>${new Intl.NumberFormat("es-cl").format(product.price)}</td>
                <td data-label={"Categoria:"}>{product.category}</td>
                {product.category === "Alimento" ? (
                  <td data-label={"Fecha vencimiento:"}>{product.date_of_expiry.toString().split("T")[0]}</td>
                ) : null}

                <td className="flex justify-center">
                  <img src={product.img} alt={product.name} className="h-24 w-24 object-cover" />
                </td>
                <td className="flex justify-center">
                  <button
                    className="bg-warning text-black px-3 py-1 rounded-[10px] mr-1 ml-1"
                    onClick={() => {
                      console.log(products);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-danger text-white px-3 py-1 rounded-[10px] mr-1 ml-1"
                    onClick={() => {
                      console.log("handleProductoEliminado(product._id)");
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaResponsive;
