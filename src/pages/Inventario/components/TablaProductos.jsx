import React, { useState, useEffect } from "react";
// Otros imports
import axios from "axios";
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";

// React Icons
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import BotonDescargar from "./BotonDescargar";
import InputBuscar from "./InputBuscar";
//componentes
import FormAgregar from "././FormAgregar";
import FormEditar from "./FormEditar";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import Log from "../components/Log";

//url API
const url = "https://inventoryplusbackend.onrender.com/products";

const TablaProductos = () => {
  const columnHelper = createColumnHelper();
  const [products, setProducts] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [data, setData] = useState([]);
  const [formDataEdit, setFormDataEdit] = useState({
    _id: "",
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    img: "",
    date_of_expiry: null,
  });
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
      cell: (info) => (
        <span>
          $
          {new Intl.NumberFormat("es-CL", {
            style: "decimal",
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }).format(info.getValue())}
        </span>
      ),
      header: "Precio",
    }),
    columnHelper.accessor("category", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Categoria",
    }),
    columnHelper.accessor("date_of_expiry", {
      cell: (info) => {
        const category = info.row.original.category;
        if (category === "Insumos") {
          return <span>Sin fecha de vencimiento</span>;
        } else {
          return <span>{info.getValue().toString().split("T")[0]}</span>;
        }
      },
      header: "Fecha de vencimiento",
    }),
    columnHelper.accessor("date_added", {
      cell: (info) => <span>{info.getValue().toString().split("T")[0]}</span>,
      header: "Fecha de ingreso",
    }),
    columnHelper.accessor("botones", {
      cell: (info) => (
        <div>
          <button
            className="bg-warning text-black px-3 py-1 rounded-[10px] mr-1 ml-1"
            onClick={() => {
              handleProductoEditado(info.row.original);
            }}
          >
            <FaEdit />
          </button>
          <button
            className="bg-danger text-white px-3 py-1 rounded-[10px] mr-1 ml-1"
            onClick={() => {
              handleProductoEliminado(info.row.original._id);
            }}
          >
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

  // Toast
  const deleteSucces = () => {
    toast.error("Producto Eliminado", {
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
      confirmButtonText: "SÍ, Eliminemoslo!",
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

  return (
    <>
      <div className="mb-4">
        <p className="text-center mt-4 text-lm text-color-crema md:mb-4">
          En este apartado podrás ver todos los productos registrados en el sistema, además de poder agregar, editar y eliminar productos.
        </p>
        <div className="p-2 mx-auto  text-color-crema bg-color-cafe-claro rounded-lg shadow-neumorphicTable">
          {/*Botones superiores*/}
          <div className="flex  justify-between mb-4 p-2">
            <div className="w-full flex items-center gap-1">
              <BiSearchAlt size={20} />
              <InputBuscar
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-color-crema"
                placeholder="Buscar..."
              />
            </div>
            <button className="download-btn" onClick={() => toggleSeccion(1)}>
              <IoIosAddCircle />
              Agregar
            </button>
            {/* Form Agregar */}
            {visibleForm && <FormAgregar onClose={() => toggleSeccion(1)} onProductoAgregado={handleProductoAgregado} />}
            {/* Form Editar */}
            {visibleEdit && <FormEditar onClose={() => toggleSeccion(2)} onProductoEditado={handleProductoEditado} rest={formDataEdit} />}
          </div>
          {/*Tabla */}
          <table className="w-full text-left">
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
                      <td key={cell.id} className="pl-3 py-2">
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
          {/*Botones inferiores */}
          <div className="flex flex-row justify-between mt-2 p-2">
            <div className="flex items-start justify-start gap-2">
              <BotonDescargar data={data} fileName={`Stock ${fechaActual.toLocaleString()}`} />
              <button type="button" className="download-btn" onClick={() => setHistoryVisible(!historyVisible)}>
                Historial
              </button>
            </div>
            {/*Paginacion*/}
            <div className="flex items-start justify-end gap-2">
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
        <ToastContainer />
      </div>
      {historyVisible && <Log onClose={() => setHistoryVisible(false)} />}
    </>
  );
};

export default TablaProductos;
