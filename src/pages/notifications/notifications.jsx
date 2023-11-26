import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NotifList from './notifList';

const Notifications = () => {
    return (
        <><h1 className="text-5xl underline text-center text-color-cafe-claro mt-2">Alertas</h1>
            <p className="text-center mt-4 text-lg text-color-cafe-claro md:mb-4">
                En este apartado podrás ver los productos que tienen un stock menor a 15 unidades, que se encuentran vencidos o pronto a vencer.
            </p>
            <div className='w-full'>
                <NotifList />
            </div>
        </>
    )
}

export default Notifications