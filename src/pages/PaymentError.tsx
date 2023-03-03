import paymentError from "../assets/error_payment.svg";

const PaymentError = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={paymentError} alt="" className="h-60 w-60" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        An error occurred while processing your payment
      </h2>
      <p className="text-center mt-10">
        Please try again or contact us if the problem persists
      </p>
    </div>
  );
};

export default PaymentError;
