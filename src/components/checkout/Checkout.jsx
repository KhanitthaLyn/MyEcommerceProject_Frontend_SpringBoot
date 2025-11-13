import React, { useEffect, useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import AddressInfo from "./AddressInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../store/actions";
import { Button } from "@headlessui/react";
import ErrorPage from "../shared/ErrorPage";
import Skeleton from "../shared/Skeleton";
import { toast } from "react-hot-toast";
import StripePayment from "./StripePayment";
import PaypalPayment from "./PaypalPayment";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { cart, totalPrice } = useSelector((state) => state.carts);
  const { address, selectedUserCheckoutAddress } = useSelector(
    (state) => state.auth
  );
  const { paymentMethod } = useSelector((state) => state.payment);

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleNext = () => {
    if (activeStep === 0 && !selectedUserCheckoutAddress) {
      toast.error("Please select checkout address before proceeding.");
      return;
    }
    if (activeStep === 1 && !paymentMethod) {
      toast.error("Please select a payment method before proceeding.");
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const steps = ["Address", "Payment Method", "Order Summary", "Payment"];

  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  return (
    <div className="py-14 min-h-[calc(100vh-100px)] bg-gray-50">
      {/* Stepper */}
      <div className="max-w-4xl mx-auto px-4">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-label": {
              color: "#6b7280",
              fontWeight: 600,
            },
            "& .MuiStepLabel-label.Mui-active": {
              color: "#2563eb",
              fontWeight: 700,
            },
            "& .MuiStepIcon-root.Mui-active": {
              color: "#2563eb",
            },
            "& .MuiStepIcon-root.Mui-completed": {
              color: "#22c55e",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="transition-all duration-300">
            {activeStep === 0 && <AddressInfo address={address} />}
            {activeStep === 1 && <PaymentMethod />}
            {activeStep === 2 && (
              <OrderSummary
                totalPrice={totalPrice}
                cart={cart}
                address={selectedUserCheckoutAddress}
                paymentMethod={paymentMethod}
              />
            )}
            {activeStep === 3 && (
              <>
                {paymentMethod === "Stripe" ? (
                  <StripePayment />
                ) : (
                  <PaypalPayment />
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-4 px-6 flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`px-6 py-2 rounded-md border border-gray-300 font-medium transition ${
            activeStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Back
        </button>

        {activeStep !== steps.length - 1 && (
          <button
            onClick={handleNext}
            disabled={
              errorMessage ||
              (activeStep === 0 && !selectedUserCheckoutAddress) ||
              (activeStep === 1 && !paymentMethod)
            }
            className={`px-8 py-2 rounded-md text-white font-semibold shadow-md transition-all ${
              errorMessage ||
              (activeStep === 0 && !selectedUserCheckoutAddress) ||
              (activeStep === 1 && !paymentMethod)
                ? "bg-blue-400 opacity-60 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:scale-95"
            }`}
          >
            Proceed
          </button>
        )}
      </div>

      {errorMessage && <ErrorPage message={errorMessage} />}
    </div>
  );
};

export default Checkout;
