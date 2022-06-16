import { useForm } from "react-hook-form";
import { sendRestaurant } from "../../actions/actions-index";

import { stateNames } from "./state-names";

import "./add-restaurant.css";

function AddRestaurantForm({ handleClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    handleClose();

    sendRestaurant(data);
  };

  const stateDropdown = {
    onMouseDown(e) {
      return (e.target.size = 10);
    },
    onFocuseOut(e) {
      return (e.target.size = 0);
    },
    onChange(e) {
      return (e.target.size = 0);
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" m-3 ">
      <div className="form-group">
        <label>Restaurant Name</label>
        <input
          type="text"
          className="form-control"
          {...register("restaurantName")}
          placeholder="enter restaurant name"
        />
      </div>

      <div className="form-group ">
        <label>Street Address</label>
        <input
          type="text"
          className="form-control"
          {...register("streetAddress")}
          placeholder="enter street address"
        />
      </div>

      <div className="form-group ">
        <label>City Name</label>
        <input
          type="text"
          className="form-control"
          {...register("cityName")}
          placeholder="enter city name"
        />
      </div>

      <div className="row form-group">
        <div className="form-group col">
          <label>Zip Code</label>
          <input
            type="number"
            className="form-control"
            {...register("zipCode")}
            placeholder="enter zip-code"
          />
        </div>

        <span className="select-holder form-group col">
          <select
            className="state-selection select form-group"
            {...register("state")}
            onMouseDown={stateDropdown.onMouseDown}
            onChange={stateDropdown.onChange}
          >
            <option>Choose State</option>
            {stateNames.map((state) => (
              <option
                key={state.abbreviation}
                value={state.abbreviation}
              >{`${state.abbreviation}, ${state.name}`}</option>
            ))}
          </select>
        </span>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="number"
          className="form-control"
          {...register("number")}
          placeholder="enter phone-number"
        />
      </div>

      <div className="form-group ">
        <label>Restaurant type</label>
        <input
          type="text"
          className="form-control"
          {...register("type")}
          placeholder="turkish, mexican, indian etc..."
        />
      </div>

      <div className="form-group ">
        <label>Website URL</label>
        <input
          type="url"
          className="form-control"
          {...register("website")}
          placeholder="http://"
        />
      </div>

      <div className="form-group ">
        <label>Order Url</label>
        <input
          type="url"
          className="form-control"
          {...register("orderUrl")}
          placeholder="http://"
        />
      </div>

      <div className="form-group ">
        <label>Image-Url</label>
        <input
          type="url"
          className="form-control"
          {...register("imgUrl")}
          placeholder="http://"
        />
      </div>

      <div className="form-group ">
        <label>Restaurant Description</label>
        <textarea
          placeholder="Describe  what the restaurant offers. No more the 120 characters"
          className="form-control"
          {...register("description")}
          maxLength={120}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary col">
        Submit
      </button>
    </form>
  );
}

export default AddRestaurantForm;
