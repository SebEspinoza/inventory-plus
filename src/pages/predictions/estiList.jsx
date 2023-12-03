import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../home/components/productCard";


//url API
const url = "https://inventoryplusbackend.cyclic.app/products";

const EstiList = () => {
    const [products, setProducts] = useState([]);
    const currentdate = new Date();

    const getProducts = async () => {
        try {
            const respuesta = await axios.get(url);
            const allProducts = respuesta.data
            setProducts(allProducts);
        } catch (error) {
            console.error("Error al obtener los trabajadores:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-md h-full lg:h-[660px] overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 overflow-y-auto">
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

export default EstiList;
