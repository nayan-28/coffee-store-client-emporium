const AddCoffee = () => {
  return (
    <div>
      <h2>Add Coffee</h2>
      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="text-group">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered"
              ></input>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="text-group">
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered"
              ></input>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
