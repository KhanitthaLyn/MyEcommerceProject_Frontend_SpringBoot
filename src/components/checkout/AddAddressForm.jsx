import React, { useEffect } from 'react';
import InputField from '../shared/InputField';
import { FaRegAddressBook } from "react-icons/fa";
import Spinners from '../shared/Spinners';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addUpdateUserAddress } from '../../store/actions';

const AddAddressForm = ({ address, setOpenAddressModal }) => {
  const dispatch = useDispatch();
  const { btnLoader } = useSelector((state) => state.errors);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSaveAddressHandler = async (data) => {
    dispatch(
      addUpdateUserAddress(
        data,
        toast,
        address?.addressId,
        setOpenAddressModal
      )
    );
    reset();
  };

  useEffect(() => {
    if (address?.addressId) {
      setValue('buildingName', address?.buildingName);
      setValue('city', address?.city);
      setValue('street', address?.street);
      setValue('state', address?.state);
      setValue('pincode', address?.pincode);
      setValue('country', address?.country);
    }
  }, [address, setValue]);

  return (
    <div className="p-4 flex justify-center">
      <form
        onSubmit={handleSubmit(onSaveAddressHandler)}
        className="bg-white rounded-xl shadow-md p-6 space-y-5 w-full max-w-lg"
      >
        {/* Title */}
        <div className="flex justify-center items-center mb-2 font-semibold text-2xl text-slate-800 border-b pb-3">
          <FaRegAddressBook className="mr-2 text-blue-600 text-3xl" />
          {!address?.addressId ? 'Add Address' : 'Update Address'}
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4 w-full">
          <InputField
            label="Building Name"
            required
            id="buildingName"
            type="text"
            message="Building Name is required"
            placeholder="Enter Building Name"
            register={register}
            errors={errors}
          />

          <InputField
            label="City"
            required
            id="city"
            type="text"
            message="City is required"
            placeholder="Enter City"
            register={register}
            errors={errors}
          />

          <InputField
            label="State"
            required
            id="state"
            type="text"
            message="State is required"
            placeholder="Enter State"
            register={register}
            errors={errors}
          />

          <InputField
            label="Pincode"
            required
            id="pincode"
            type="text"
            message="Pincode is required"
            placeholder="Enter Pincode"
            register={register}
            errors={errors}
          />

          <InputField
            label="Street"
            required
            id="street"
            type="text"
            message="Street is required"
            placeholder="Enter Street"
            register={register}
            errors={errors}
          />

          <InputField
            label="Country"
            required
            id="country"
            type="text"
            message="Country is required"
            placeholder="Enter Country"
            register={register}
            errors={errors}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={btnLoader}
          className="w-full text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mt-4 transition-all flex justify-center items-center font-medium"
          type="submit"
        >
          {btnLoader ? (
            <>
              <Spinners /> <span className="ml-2">Loading...</span>
            </>
          ) : (
            <>Save Address</>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
