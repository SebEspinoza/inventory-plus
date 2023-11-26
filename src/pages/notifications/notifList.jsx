import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NotifCard from "./notifcard";

//url API
const url = "https://inventoryplusbackend.cyclic.app/products";

const NotifList = () => {
    const [products, setProducts] = useState([]);
    const currentdate = new Date();

    const getProducts = async () => {
        try {
            const respuesta = await axios.get(url);
            const allProducts = respuesta.data
            const filteredProducts = allProducts.filter(product => product.quantity <= 15 || product.date_of_expiry < currentdate)
            setProducts(filteredProducts);
        } catch (error) {
            console.error("Error al obtener los trabajadores:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="container mx-auto p-6 ms-0 me-0 bg-white shadow-lg rounded-md h-full lg:h-[660px] lg:overflow-y-hidden">
            <div className="grid grid-cols-3 place-items-center overflow-y-auto">
                {products.map((prod) => (
                    <NotifCard
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

export default NotifList;
