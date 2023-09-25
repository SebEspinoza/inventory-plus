import React, { useState, useEffect } from "react";
// Otros imports
import axios from "axios";
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";
// React Icons
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import BotonDescargar from "./BotonDescargar";
import InputBuscar from "./InputBuscar";

//url API
const url = "https://inventoryplus.cyclic.app/products";

const TablaProductos = () => {
  const columnHelper = createColumnHelper();
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const fechaActual = new Date();

  const getProducts = async () => {
    try {
      const respuesta = await axios.get(url);
      setProducts(respuesta.data);
      setData(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    columnHelper.accessor("", {
      id: "Nro",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Nro",
    }),
    columnHelper.accessor("img", {
      cell: (info) => <img src={info?.getValue()} alt="..." className="rounded-full w-10 h-10 object-cover" />,
      header: "Imagen",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Producto",
    }),
    columnHelper.accessor("quantity", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Stock",
    }),
    columnHelper.accessor("price", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Precio",
    }),
    columnHelper.accessor("category", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Categoria",
    }),
    columnHelper.accessor("date_of_expiry", {
      cell: (info) => <span>{info.getValue().toString().split("T")[0]}</span>,
      header: "Fecha de caducidad",
    }),
    columnHelper.accessor("botones", {
      cell: () => (
        <div>
          <button className="bg-warning text-black px-3 py-1 rounded-[10px] mr-1 ml-1">
            <FaEdit />
          </button>
          <button className="bg-danger text-white px-3 py-1 rounded-[10px] mr-1 ml-1">
            <FaTrashAlt />
          </button>
        </div>
      ),
      header: "Acciones",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="p-2 mx-auto  text-color-crema fill-color-cafe-oscuro">
        <div className="flex justify-between mb-4">
          <div className="w-full flex items-center gap-1">
            <BiSearchAlt size={20} />
            <InputBuscar
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-color-crema"
              placeholder="Buscar..."
            />
          </div>

          <BotonDescargar data={data} fileName={`Stock ${fechaActual.toLocaleString()}`} />
        </div>
        {/*Tabla */}
        <table className="border border-color-cafe-oscuro w-full text-left">
          <thead className="bg-color-cafe-oscuro">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="capitalize px-3.5 py-2" key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr key={row.id} className={`${i % 2 === 0 ? "bg-mocha" : "bg-color-cafe-claro-600"}`}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>Producto No Encontrado!</td>
              </tr>
            )}
          </tbody>
        </table>
        {/*Paginacion*/}
        <div className="flex items-start justify-end mt-2 gap-2">
          {/*Botones para cambiar de pagina */}
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-color-cafe-claro px-2 disabled:opacity-30"
          >
            {<IoIosArrowBack />}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-color-cafe-claro px-2 disabled:opacity-30"
          >
            {<IoIosArrowForward />}
          </button>
          {/*Numero de pagina */}
          <span className="flex items-center gap-1">
            <div>Página</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} de {""}
              {table.getPageCount()}
            </strong>
          </span>
          {/*Ir a una pagina en especifico */}
          <span className="flex items-start gap-1">
            - Ir a la página:
            <input
              type="number"
              onWheel={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              defaultValue={table.getState().pagination.pageIndex + 1}
              className="border p-1 rounded bg-transparent w-14 h-6 
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </span>
          {/*Mostrar N productos */}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-[2px] bg-color-cafe-claro border-none text-color-crema w-25 h-6 text-sm"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TablaProductos;
