import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const url = "https://inventoryplus.cyclic.app/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get(url, { signal: controller.signal });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>User list</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </article>
  );
};

export default Users;
