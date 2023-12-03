// React Imports
import React from "react";
// Otros Imports
import * as XLSX from "xlsx/xlsx.mjs";
// Icons
import { BiSolidDownload } from "react-icons/bi";
const BotonDescargar = ({ data = [], fileName }) => {
  // Función para eliminar la propiedad _id,  __v y password de cada objeto
  const cleanData = data.map((item) => {
    const rol = item.role === true ? "Administrador" : "Trabajador";
    const { _id, __v, password, username, email, first_name, last_name, role, ...rest } = item;
    return { Nombre_de_usuario: username, Email: email, Nombre: first_name, Apellido: last_name, Tipo_de_trabajador: rol, ...rest };
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
