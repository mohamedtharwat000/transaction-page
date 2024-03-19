// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DonationInformation from './DonationInformation';

// interface Transaction {
//   id: string;
//   amount: number;
//   status: 'success' | 'pending';
//   paymentMethod: string;
//   lastUpdate: string;
//   supporter: string;
//   campaign: string;
//   donationID: string;
//   donationDate: string;
//   successDate: string;
//   frequency: string;
//   paymentProcessor: string;
//   paymentID: string;
//   creditCard: string;
//   payoutAmount: number;
//   feeCovered: boolean;
//   effectiveFee: number;
//   // Add other fields as needed
// }

// const TransactionPage = () => {
//   const [transaction, setTransaction] = useState<Transaction | null>(null);
//   const [showDonationInfo, setShowDonationInfo] = useState(false);

//   useEffect(() => {
//     // Fetch transaction data from the backend API
//     const fetchTransactionData = async () => {
//       try {
//         const response = await axios.get('/api/transaction');
//         setTransaction(response.data);
//       } catch (error) {
//         console.error('Error fetching transaction data:', error);
//       }
//     };

//     fetchTransactionData();
//   }, []);

//   const handleEditDonationInfo = () => {
//     setShowDonationInfo(true);
//   };

//   // Add form handling and update logic here

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="md:w-1/3 p-4">
//         {/* Left column */}
//         <div>Donation</div>
//         <div>Payment &amp; Fees</div>
//         {/* Add other sections */}
//       </div>
//       <div className="md:w-2/3 p-4">
//         {/* Right column */}
//         {transaction ? (
//           <>
//             <div className="flex justify-between mb-4">
//               <div>
//                 <span className="text-xl font-bold">
//                   ${transaction.amount} USD
//                 </span>
//                 <span className="ml-2 bg-green-200 text-green-800 px-2 rounded-full">
//                   {transaction.status === 'success' ? 'Succeeded' : 'Pending'}
//                 </span>
//               </div>
//               <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
//                 Refund
//               </button>
//             </div>
//             <div className="grid grid-cols-4 gap-4 mb-4">
//               <div>
//                 <div className="font-bold">Last Update</div>
//                 <div>{transaction.lastUpdate}</div>
//               </div>
//               <div>
//                 <div className="font-bold">Supporter</div>
//                 <div>{transaction.supporter}</div>
//               </div>
//               <div>
//                 <div className="font-bold">Campaign</div>
//                 <div>{transaction.campaign}</div>
//               </div>
//               <div>
//                 <div className="font-bold">Payment method</div>
//                 <div>
//                   <img
//                     src={`/payment-icons/${transaction.paymentMethod}.png`}
//                     alt={transaction.paymentMethod}
//                   />
//                   <span className="ml-2">{transaction.creditCard}</span>
//                 </div>
//               </div>
//             </div>
//             {/* Render other transaction details */}
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleEditDonationInfo}
//             >
//               Edit Donation Information
//             </button>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//       {showDonationInfo && (
//         <DonationInformation
//           transaction={transaction}
//           onClose={() => setShowDonationInfo(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default TransactionPage;
