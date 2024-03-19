// import React, { useState } from 'react';
// import axios from 'axios';

// interface Transaction {
//   // Transaction interface properties
// }

// interface DonationInformationProps {
//   transaction: Transaction | null;
//   onClose: () => void;
// }

// const DonationInformation: React.FC<DonationInformationProps> = ({
//   transaction,
//   onClose,
// }) => {
//   const [supporter, setSupporter] = useState(transaction?.supporter || '');
//   const [campaign, setCampaign] = useState(transaction?.campaign || '');
//   const [designation, setDesignation] = useState(
//     transaction?.designation || ''
//   );
//   const [frequency, setFrequency] = useState(transaction?.frequency || '');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.put('/api/don.information', {
//         supporter,
//         campaign,
//         designation,
//         frequency,
//       });
//       // Handle success
//       onClose();
//     } catch (error) {
//       console.error('Error updating donation information:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-bold mb-4">Donation information</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="supporter"
//               className="block font-bold mb-2"
//             >
//               Supporter Name
//             </label>
//             <input
//               type="text"
//               id="supporter"
//               value={supporter}
//               onChange={(e) => setSupporter(e.target.value)}
//               className="border border-gray-300 rounded-md px-3 py-2 w-full"
//             />
//           </div>
//           {/* Add other form fields */}
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DonationInformation;
