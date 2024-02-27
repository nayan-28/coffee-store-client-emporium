import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-center py-6">Users:{loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUsers.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className="btn btn-info">Action</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
