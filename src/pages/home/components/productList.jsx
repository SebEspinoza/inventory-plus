import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productCard";

//url API
const url = "https://inventoryplusbackend.cyclic.app/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const respuesta = await axios.get(url);
      setProducts(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const redirect = () => {
    navigate("/inventario");
  };

  return (
    <div className="container mx-auto p-6 ms-0 me-0 bg-white shadow-lg rounded-md h-full lg:h-[660px] lg:overflow-y-hidden">
      <div className="flex mb-4 justify-between">
        <div className="font-bold text-lg">Productos</div>
        <button className="bg-color-cafe-claro hover:bg-rojizo text-white font-bold py-2 px-4 rounded" onClick={redirect}>
          Ver todos
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        {products.map((prod) => (
          <ProductCard
            key={prod._id}
            name={prod.name}
            description={[prod.category, <br />, prod.quantity + " unidades de stock", <br />, "$" + prod.price]}
            img={prod.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
