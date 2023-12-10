import NotifList from "./notifList";

const Notifications = () => {
  return (
    <>
      <p className="text-center mt-4 text-sm md:text-lg text-color-cafe-claro md:mb-4">
        En este apartado podrás ver los productos que tienen un stock menor a 15 unidades, que se encuentran vencidos o pronto a vencer.
      </p>
      <div className="w-full">
        <NotifList />
      </div>
    </>
  );
};

export default Notifications;
