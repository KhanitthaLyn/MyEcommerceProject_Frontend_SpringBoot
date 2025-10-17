import React, { useState } from "react";
import AddressList from "./AddressList";
import { useDispatch, useSelector } from "react-redux";
import AddressInfoModal from "./AddressInfoModal";
import { FaRegAddressBook } from "react-icons/fa";
import { DeleteModal } from "./DeleteModal";
import Skeleton from "../shared/Skeleton";
import toast from "react-hot-toast";
import { deleteUserAddress } from "../../store/actions";
import AddAddressForm from "./AddAddressForm";

const AddressInfo = ({ address }) => {
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const dispatch = useDispatch();
  const { isLoading, btnLoader } = useSelector((state) => state.errors);
  const noAddressExist = !address || address.length === 0;

  const addNewAddressHandler = () => {
    setSelectedAddress("");
    setOpenAddressModal(true);
  };

  const deleteAddressHandler = () => {
    dispatch(
      deleteUserAddress(toast, selectedAddress?.addressId, setOpenDeleteModal)
    );
  };

  return (
    <div className="pt-6">
      {noAddressExist ? (
        <div className="p-8 rounded-2xl max-w-md mx-auto bg-white shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center transition-all hover:shadow-md">
          <FaRegAddressBook size={56} className="text-blue-500 mb-4" />
          <h1 className="text-slate-900 font-semibold text-2xl mb-2">
            No Address Added Yet
          </h1>
          <p className="text-gray-600 mb-6">
            Add your address to continue checkout easily
          </p>

          <button
            onClick={addNewAddressHandler}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
          >
            ➕ Add Address
          </button>
        </div>
      ) : (
        <div className="relative p-6 rounded-2xl max-w-2xl mx-auto bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
          <h1 className="text-slate-900 text-center font-bold text-2xl mb-6">
            🏠 Select Address
          </h1>

          {isLoading ? (
            <div className="py-4 px-8">
              <Skeleton />
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <AddressList
                  addresses={address}
                  setSelectedAddress={setSelectedAddress}
                  setOpenAddressModal={setOpenAddressModal}
                  setOpenDeleteModal={setOpenDeleteModal}
                />
              </div>

              {address.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={addNewAddressHandler}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
                  >
                    ➕ Add More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Modals */}
      <AddressInfoModal open={openAddressModal} setOpen={setOpenAddressModal}>
        <AddAddressForm
          address={selectedAddress}
          setOpenAddressModal={setOpenAddressModal}
        />
      </AddressInfoModal>

      <DeleteModal
        open={openDeleteModal}
        loader={btnLoader}
        setOpen={setOpenDeleteModal}
        title="Delete Address"
        onDeleteHandler={deleteAddressHandler}
      />
    </div>
  );
};

export default AddressInfo;
