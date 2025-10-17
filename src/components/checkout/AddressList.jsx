import React from 'react'
import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from 'react-icons/fa';
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { selectUserCheckoutAddress } from '../../store/actions';

const AddressList = ({ addresses, setSelectedAddress, setOpenAddressModal, setOpenDeleteModal }) => {
    const dispatch = useDispatch();
    const {selectedUserCheckoutAddress} = useSelector((state) => state.auth);

    const onEditButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenAddressModal(true);
    };

    const onDeleteButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenDeleteModal(true);
    };

    const handleAddressSelection = (addresses) => {
        dispatch(selectUserCheckoutAddress(addresses));
    };

  return (
    <div className='space-y-4'>
        {addresses.map((address) => (
            <div
                key={address.addressId}
                onClick={() => handleAddressSelection(address)}
                className={`p-5 border rounded-xl shadow-sm cursor-pointer relative transition-all duration-200 hover:shadow-md ${
                    selectedUserCheckoutAddress?.addressId === address.addressId
                    ? "bg-green-50 border-green-400"
                    : "bg-white border-gray-200"
                }`}>
                
                {/* Content */}
                <div className="flex items-start">
                    <div className="space-y-2 text-sm text-gray-700">
                        
                        <div className="flex items-center">
                            <FaBuilding size={15} className='mr-2 text-gray-500' />
                            <p className='font-semibold text-gray-900'>{address.buildingName}</p>
                            {selectedUserCheckoutAddress?.addressId === address.addressId && (
                                <FaCheckCircle className='text-green-500 ml-2' />
                            )}
                        </div>

                        <div className="flex items-center">
                            <FaStreetView size={16} className='mr-2 text-gray-500' />
                            <p>{address.street}</p>
                        </div>

                        <div className="flex items-center">
                            <MdLocationCity size={16} className='mr-2 text-gray-500' />
                            <p>{address.city}, {address.state}</p>
                        </div>

                        <div className="flex items-center">
                            <MdPinDrop size={16} className='mr-2 text-gray-500' />
                            <p>{address.pincode}</p>
                        </div>

                        <div className="flex items-center">
                            <MdPublic size={16} className='mr-2 text-gray-500' />
                            <p>{address.country}</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 absolute top-4 right-3">
                    <button 
                        onClick={() => onEditButtonHandler(address)} 
                        className="hover:scale-110 transition-transform"
                    >
                        <FaEdit size={18} className="text-teal-700 hover:text-teal-900" />
                    </button>
                    <button 
                        onClick={() => onDeleteButtonHandler(address)} 
                        className="hover:scale-110 transition-transform"
                    >
                        <FaTrash size={17} className="text-rose-600 hover:text-rose-800" />
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default AddressList
