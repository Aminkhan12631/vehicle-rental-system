import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-5">Users 👤</h1>

      {users.map((u) => (
        <div key={u._id} className="bg-slate-800 p-4 mb-3 rounded">
          <p>Name: {u.name}</p>
          <p>Email: {u.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
