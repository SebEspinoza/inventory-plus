// React Imports
import React from "react";
// Otros Imports
import * as XLSX from "xlsx/xlsx.mjs";
// Icons
import { BiSolidDownload } from "react-icons/bi";
const BotonDescargar = ({ data = [], fileName }) => {
  // Función para eliminar la propiedad _id y __v de cada objeto
  const cleanData = data.map((item) => {
    const { _id, __v, name, quantity, price, category, date_of_expiry, img, ...rest } = item;
    return { Producto: name, Cantidad: quantity, Precio: price, Categoria: category, FechaDeCaducidad: date_of_expiry, ...rest };
  });
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = cleanData?.length ? cleanData : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      <BiSolidDownload />
      Descargar
    </button>
  );
};

export default BotonDescargar;
