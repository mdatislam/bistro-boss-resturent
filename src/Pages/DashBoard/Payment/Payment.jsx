import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitel/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_PK);
const Payment = () => {
    const [carts]=useCart()
//console.log('payment cart',carts.data)
    const totalPrice= carts?.data?.reduce((sum,cart)=> sum +cart.price,0)
    const price= parseFloat(totalPrice?.toFixed(2))
    //console.log(price)
    return (

        <div className="w-full mx-3 p-2">
            <Helmet>
                <title> Bistro |Payment</title>
            </Helmet>
            <SectionTitle heading='Payment' subHeading='Please provide'>

            </SectionTitle>
           
           <div>
           <Elements stripe={stripePromise}>
      <CheckOutForm price={price} carts={carts}/>
    </Elements>
           </div>
        </div>
    );
};

export default Payment;