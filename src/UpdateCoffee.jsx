import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">
        Update Coffee :{name}
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                name="name"
                required
                defaultValue={name}
              ></input>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="text-group">
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                name="quantity"
                defaultValue={quantity}
                required
              ></input>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
                name="supplier"
                defaultValue={supplier}
                required
              ></input>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
                name="taste"
                defaultValue={taste}
                required
              ></input>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full"
                name="category"
                defaultValue={category}
                required
              ></input>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
                name="details"
                defaultValue={details}
                required
              ></input>
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
                required
              ></input>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-purple-500"
        ></input>
      </form>
    </div>
  );
};

export default UpdateCoffee;
