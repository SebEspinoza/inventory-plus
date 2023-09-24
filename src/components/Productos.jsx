import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AgregarProducto from "./AgregarProducto";
import EditarProducto from "./EditarProducto";
import "../styles/Productos.css";

const url = "https://inventoryplus.cyclic.app/products";

const Productos = () => {
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

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const respuesta = await axios.get(url);
    setProducts(respuesta.data);
  };

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
    <div className="App">
      <div className="container-fluid ">
        {/*Boton agregar */}
        <div className="container mx-auto">
          <div className="mt-3">
            <div className="md:col-span-4 md:col-start-5">
              <div className="grid place-items-center">
                <button className="btnAgregarProd bg-color-cafe-claro text-color-crema px-4 py-2 rounded-full" onClick={() => toggleSeccion(1)}>
                  <RiAddCircleFill className="mr-1" /> Agregar Productos
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Form agregar productos */}
        {visibleForm && (
          <div className="">
            <AgregarProducto onClose={() => toggleSeccion(1)} onProductoAgregado={handleProductoAgregado} />
          </div>
        )}
        {/*Form editar productos */}
        {visibleEdit && (
          <div className="">
            <EditarProducto onClose={() => toggleSeccion(2)} onProductoEditado={handleProductoEditado} rest={formDataEdit} />
          </div>
        )}
        {/*Tabla Productos */}
        {products && (
          <div className="mt-3">
            <div className="lg:col-span-8 lg:col-start-3">
              <div>
                <table className="tabla-productos table-auto  mx-auto bg-color-crema">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-r">#</th>
                      <th className="px-4 py-2 border-r">Producto</th>
                      <th className="px-4 py-2 border-r">Cantidad</th>
                      <th className="px-4 py-2 border-r">Precio</th>
                      <th className="px-4 py-2 border-r">Categoria</th>
                      <th className="px-4 py-2 border-r">Fecha de caducidad</th>
                      <th className="px-4 py-2 border-r">Imagen</th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-t">
                    {products.map((product, i) => (
                      <tr key={product._id} className="text-center">
                        <td className="border-r">{i + 1}</td>
                        <td className="border-r">{product.name}</td>
                        <td className="border-r">{product.quantity}</td>
                        <td className="border-r">${new Intl.NumberFormat("es-cl").format(product.price)}</td>
                        <td className="border-r">{product.category}</td>
                        <td className="border-r">{product.date_of_expiry.toString().split("T")[0]}</td>
                        <td className="border-r">
                          <img src={product.img} alt={product.name} className="h-12 w-12 object-cover mx-auto my-1" />
                        </td>
                        <td className="align-middle text-center">
                          <button
                            className="bg-warning text-black px-3 py-1 rounded-[10px] mr-1 ml-1"
                            onClick={() => {
                              handleProductoEditado(product);
                            }}
                          >
                            <FaEdit />
                          </button>
                        </td>
                        <td className="align-middle text-center">
                          <button
                            className="bg-danger text-white px-3 py-1 rounded-[10px] mr-1 ml-1"
                            onClick={() => handleProductoEliminado(product._id)}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Productos;
