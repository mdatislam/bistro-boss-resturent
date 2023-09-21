import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './Payment.css'


const CheckOutForm = ({ price, carts }) => {

  const { user } = useAuth()
  const stripe = useStripe()
  const element = useElements()
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false)
  const [paymentTransactionId, setPaymentTransactionId] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
         // console.log(res.data)
          setClientSecret(res.data.clientSecret)
        })

    }

  }, [price, axiosSecure])



  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !element) {
      return
    }

    const card = element.getElement(CardElement)

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
     // console.log('card error', error)
      setCardError(error.message)

    }
    else {
      setCardError('')
     // console.log('payment Method', paymentMethod)
    }

    // card confirm payment from google> stripe card confirm payment

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError)
    }

   // console.log('payment intend', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === "succeeded")
      setPaymentTransactionId(paymentIntent.id)
    //console.log(paymentTransactionId)

    // payment info save to server
    const paymentInfo = {
      date: new Date(),
      price,
      paymentTransactionId: paymentIntent.id,
      email: user?.email,
      status: 'service Pending',
      itemsNames: carts?.data?.map(item => item.name),
      cartItems: carts?.data?.map(item => item._id),
      menuItems: carts?.data?.map(item => item.orderItemId)
    }

    axiosSecure.post('/payment', paymentInfo)
      .then(res => {
        console.log(res.data)
        if (res.data.insertPayment.insertedId && res.data.deletePaidItems.deletedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Transaction ID # ${paymentIntent.id}`,
            showConfirmButton: false,
            timer: 3500
          })
          navigate('/Menu')

        }
      })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-info btn-sm" type="submit"  disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>

      <div>
        {cardError && <p className="text-red-500 text-center">{cardError}</p>}
        {paymentTransactionId && <p className="text-blue-900 text-center text-lg">Transaction ID:{paymentTransactionId}</p>}
      </div>
    </>
  );
};

export default CheckOutForm;