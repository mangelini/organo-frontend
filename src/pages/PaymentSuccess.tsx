import success_payment from "../assets/success_payment.svg";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={success_payment} alt="" className="h-60 w-60" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        Your payment was successful!
      </h2>
      <p className="text-center mt-10">
        Now you can continue shopping or visit your profile to keep track of
        your orders
      </p>
    </div>
  );
};

export default PaymentSuccess;
