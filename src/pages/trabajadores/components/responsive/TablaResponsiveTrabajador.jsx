import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "../../../../styles/dataTable.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import FormAgregar from "../FormAgregar";
import FormEditar from "../FormEditar";

const url = "https://inventoryplusbackend.cyclic.app/users";
const TablaResponsiveTrabajador = () => {
  const [workers, setWorkers] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [formDataEdit, setFormDataEdit] = useState({
    _id: "",
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    role: Boolean,
  });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredWorkers = workers.filter((worker) => worker.first_name.toLowerCase().includes(searchInput.toLowerCase()));

  const toggleBodyOverflow = (shouldHideOverflow) => {
    document.body.style.overflow = shouldHideOverflow ? "hidden" : "auto";
  };

  const getWorkers = async () => {
    const respuesta = await axios.get(url);
    setWorkers(respuesta.data);
  };

  useEffect(() => {
    getWorkers();
  }, []);

  const toggleSeccion = (type) => {
    if (type === 1) {
      setVisibleForm(!visibleForm);
      toggleBodyOverflow(!visibleForm);
      window.scrollTo(0, 0);
    }

    if (type === 2) {
      setVisibleEdit(!visibleEdit);
      toggleBodyOverflow(!visibleEdit);
      window.scrollTo(0, 0);
    }
  };

  const handleWorkerAgregado = () => {
    getWorkers();
    toggleSeccion(1);
    addToast();
  };

  const handleWorkerEditado = (worker) => {
    setFormDataEdit(worker);
    getWorkers();
    toggleSeccion(2);
  };

  const handleWorkerEliminado = async (id) => {
    const result = await Swal.fire({
      title: "¿Seguro que deseas eliminar este trabajador?",
      text: "Este paso no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background: "#fff0c9",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, Eliminemoslo!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(url + "/" + id);
        deleteSucces();
        getWorkers();
      } catch (error) {
        console.error("Error al eliminar el trabajador", error);
        Swal.fire("Error", "Ocurrió un error al eliminar el trabajador", "error");
      }
    }
  };

  // Toast
  const deleteSucces = () => {
    toast.error("Trabajador Eliminado", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addToast = () => {
    toast.success("Trabajador agregado!", {
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

  const handleRole = (role) => {
    if (role === true) {
      return "Administrador";
    } else {
      return "Trabajador";
    }
  };

  return (
    <div className="container-table">
      <p className="text-center mt-4 text-lg text-color-crema md:mb-4">
        En este apartado podrás ver todos los trabajadores registrados, además de poder agregar, editar y eliminar trabajadores.
      </p>
      <div className="dataTable ">
        <div className="search flex justify-between mb-4 p-2">
          <div className=" flex items-center gap-1">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 bg-white outline-none border-b-2 duration-300 border-color-crema"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <table className="bg-none">
          <thead></thead>
          <tbody className="bg-transparent">
            {filteredWorkers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-md text-color-crema bg-color-cafe-claro shadow-neumorphicTr mb-6 rounded-md">
                  No existen trabajadores o trabajador no encontrado.
                </td>
              </tr>
            ) : (
              filteredWorkers.map((worker, i) => (
                <tr key={worker._id} className="text-center text-md text-color-crema bg-color-cafe-claro shadow-neumorphicTr mb-6 rounded-md">
                  <td data-label={"Nro"}>{i + 1}</td>
                  <td data-label={"Nombre de usuario:"}>{worker.username}</td>
                  <td data-label={"Email:"}>{worker.email}</td>
                  <td data-label={"Nombre:"}>{worker.first_name}</td>
                  <td data-label={"Apellido:"}>{worker.last_name}</td>
                  <td data-label={"Rol:"}>{handleRole(worker.role)}</td>
                  <td className="flex justify-center">
                    <button
                      className="bg-warning text-black px-3 py-1 rounded-[5px] mr-1 ml-1"
                      onClick={() => {
                        handleWorkerEditado(worker);
                      }}
                    >
                      <FaEdit size={25} />
                    </button>
                    <button
                      className="bg-danger text-white px-3 py-1 rounded-[5px] mr-1 ml-1"
                      onClick={() => {
                        handleWorkerEliminado(worker._id);
                      }}
                    >
                      <FaTrashAlt size={25} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Form Agregar */}
      {visibleForm && <FormAgregar onClose={() => toggleSeccion(1)} onWorkerAgregado={handleWorkerAgregado} />}
      {/* Form Editar */}
      {visibleEdit && <FormEditar onClose={() => toggleSeccion(2)} onWorkerEditado={handleWorkerEditado} rest={formDataEdit} />}
      <div className="md:hidden w-full right-0 bottom-0 z-10 sticky flex justify-end pb-4 mx-0">
        <button className="rounded-full text-color-crema" onClick={() => toggleSeccion(1)}>
          <IoIosAddCircle size={50} />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TablaResponsiveTrabajador;
