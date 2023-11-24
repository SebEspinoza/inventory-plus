import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios';


const RadarChart = (props) => {

    const url = "https://inventoryplusbackend.onrender.com/products";
    const [data, setData] = React.useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(url);
            const allProducts = res.data
            const filteredProducts = allProducts.filter(product => product.quantity <= 15)
            setData(filteredProducts)
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    console.log(data)

    useEffect(() => {
        getData();
    }, []);

    const names = data.map((product) => product.name)
    const quantities = data.map((product) => product.quantity)

    const series = [{
        name: 'Stock de Productos',
        data: quantities,
    }];
    const options = {
        chart: {
            height: 350,
            id: 'radar',
        },
        title: {
            text: 'Productos con bajo Stock',
            align: 'center',
        },
        xaxis: {
            categories: names,
        }
    }


    return (
        <div id="chart" className='bg-white rounded-[10px] shadow-md mt-5'>
            <Chart className={props.classN} options={options} series={series} type="radar" height={600} />
        </div>

    );

};
export default RadarChart