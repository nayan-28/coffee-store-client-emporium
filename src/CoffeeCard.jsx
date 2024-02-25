import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  console.log(setCoffees);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            const remaining = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="card card-side  shadow-xl bg-gray-100">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="flex justify-between-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{taste}</p>
          <p>{quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group join join-vertical space-y-4">
            <button className="btn join-item bg-green-200">
              <FaEye className="text-3xl"></FaEye>
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-gray-300">
                <FaEdit className="text-3xl"></FaEdit>
              </button>
            </Link>
            <button
              className="btn join-item bg-red-400"
              onClick={() => handleDelete(_id)}
            >
              <ImBin className="text-3xl "></ImBin>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
