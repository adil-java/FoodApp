import React,{useState,useEffect} from 'react';
import { useCart } from '../context/contextReducer';
import { useNavigate } from 'react-router-dom'; // For navigation to the home page
import { use } from 'react';

// A reusable CloseButton component
const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 text-2xl text-white hover:text-red-500"
  >
    &times;
  </button>
);
export default function Cart() {
  let data = useCart();

  const history = useNavigate(); 
const [total, setTotal] = useState(0);
  const goHome = () => {
    history('/'); 
  };
  useEffect(() => {
    let newTotal = 0; 
    data.map(food => {
      newTotal += parseFloat(food.price) * food.qty; 
    });
    setTotal(newTotal);
  }, [data]);
  

  if (data.length === 0) {
    return (
      <div className="max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <CloseButton onClick={goHome} />
          <h4 className="text-2xl font-semibold text-gray-100">Your Cart is Empty</h4>
          <p className="text-gray-200 mt-2">No items in Cart!</p>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg relative">
      {/* Close Button */}
      <CloseButton onClick={goHome} />

      <div className="text-center">
        <h4 className="text-2xl font-semibold text-gray-100">Your Shopping Cart</h4>
      </div>

      <div className="mt-6">
        <table className="table-auto w-full text-sm text-center border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {
            
            data.map((food, index) => (
             

              
              <tr key={food.id || index} className={`${index % 2 === 0 ? 'bg-gray-600' : 'bg-black'}`}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{food.name}</td>
                <td className="px-4 py-2">{food.qty}</td>
                <td className="px-4 py-2">{formatCurrency(food.price)}</td>
                {/* {settotal(prev=>prev+food.total)} */}
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="px-4 py-2 font-semibold text-white">Total:</td>
              <td className="px-4 py-2 font-semibold text-white">{
              
                formatCurrency(total)
                }
                </td>
            </tr>
            <button className='btn btn-primary' onClick={goHome}>Confirm</button>
          </tbody>
        </table>
      </div>
    </div>
  );
}
