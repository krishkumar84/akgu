import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';



function Feestructure() {
    
  const [isParagraphVisible_1, setParagraphVisible_1] = useState(false);
  const [isParagraphVisible_2, setParagraphVisible_2] = useState(false);
  const [isParagraphVisible_3, setParagraphVisible_3] = useState(false);
  const [isParagraphVisible_4, setParagraphVisible_4] = useState(false);
  const [isParagraphVisible_5, setParagraphVisible_5] = useState(false);
   const toggleParagraphVisibility_1 = () => {
    setParagraphVisible_1(!isParagraphVisible_1);
   
  };
  const toggleParagraphVisibility_2 = () => {
    setParagraphVisible_2(!isParagraphVisible_2);
   
  };
  const toggleParagraphVisibility_3 = () => {
    setParagraphVisible_3(!isParagraphVisible_3);
   
  };
  const toggleParagraphVisibility_4 = () => {
    setParagraphVisible_4(!isParagraphVisible_4);
   
  };
  const toggleParagraphVisibility_5 = () => {
    setParagraphVisible_5(!isParagraphVisible_5);
   
  };

  return (
    <>
     <h1 className='text-4xl font-semibold text-center pt-10 pb-14'>
          Fee Structure
        </h1>
    <div className="mt-4 sm:mx-20 ">
     
    <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
        setParagraphVisible_1 ? 'shadow-md' : ''
      }`} >                  
<button
  onClick={toggleParagraphVisibility_1}
  className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
>

  <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Academic fee for the B.Tech students to be admitted during the session 2024-25</span>
  {setParagraphVisible_1 ? (
          <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
        )}
</button>
{isParagraphVisible_1 && (
  <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
    <div className="overflow-x-auto">
           <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">SNo. </th>
                 <th className="py-2 px-4 border-b ">Particulars </th>
                 <th className="py-2 px-4 border-b">Amount in Rs.</th>
                 
                 
               </tr>
             </thead>
             <tbody>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <td className="py-2 px-4 border-b text-center">1</td>
                 <td className="py-2 px-4 border-b text-center">Registration Fees</td>
                 <td className="py-2 px-4 border-b text-center">1500</td>
                
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">2</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Tuition & Development Fees</td>
                 <td className="py-2 px-4 border-b text-center">111256</td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">3</td>
                 <td className="py-2 px-4 border-b text-center">Exam & Enrollment Fees*</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">4</td>
                 <td className="py-2 px-4 border-b text-center">Medical Charges</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">1500</td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">5</td>
                 <td className="py-2 px-4 border-b text-center">Book Bank Fees</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">3000</td>
                 
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">6</td>
                 <td className="py-2 px-4 border-b text-center">Activity Fee (One Time)</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
              
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">7</td>
                 <td className="py-2 px-4 border-b text-center">PDP Charges (One Time)</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">3500</td>
                </tr>
                <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">8</td>
                 <td className="py-2 px-4 border-b text-center">Career Planning & Placement (One Time)</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                </tr>
                <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">9</td>
                 <td className="py-2 px-4 border-b text-center">Caution Money (Refundable)</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                </tr>
                <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">10</td>
                 <td className="py-2 px-4 border-b text-center"></td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">135756</td>
                </tr>
               {/* Add more rows as needed */}
             </tbody>
           </table>
         </div>
     

    <p className='text-gray-500'>*The Following payments will be paid by the students directly to the University as and when demanded:</p>
    <p className='text-gray-500'>a Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</p>
    <p className='text-gray-500'>b The aforesaid fees are subject to change, if any, by the University.</p>
     
    <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">Hostel Fee </th>
                 <th className="py-2 px-4 border-b ">For Boys: Double Seater </th>
                 <th className="py-2 px-4 border-b">For Boys: Triple Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Triple Seater</th>
                 </tr>
             </thead>
             <tbody>
               
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Rent & Mess Charges</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">125000</td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Security ( Refundable )</td>
                 <td className="py-2 px-4 border-b text-center">10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Total</td>
                 <td className="py-2 px-4 border-b text-center">135000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
               </tr>
              </tbody>
           </table>
           <p className='text-gray-500'>1. The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</p>
         <p className='text-gray-500'>2. Medical charges include Medical Insurance on hospitalization upto Rs.50,000/-, Accidental Insurance upto Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</p>
         <p className='text-gray-500'>Mode of Payment:</p>
         <p className='text-gray-500'>1. By DD/PO in favour of “Ajay Kumar Garg Engineering College payable at Ghaziabad or Delhi. Write your name and mobile number on reverse of the draft. It may be submitted by post or in person.</p>
         <p className='text-gray-500'>OR</p>
         <p className='text-gray-500'>2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
         <p className='text-gray-500'>Name of the Beneficiary : Ajay Kumar Garg Engineering College</p>
         <p className='text-gray-500'>Name of the Bank : Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</p>
         <p className='text-gray-500'>Bank Account No. : 508010250461 (Saving Bank Account)</p>
         <p className='text-gray-500'>RTGS/NEFT/IFSC Code : KKBK0005295</p>
         <p className='text-gray-500'>Note : This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
         </div>
        
         
         
)}
</div>
<div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_2 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_2}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Academic fee for the MCA students to be admitted during the session 2024-25</span>
          {setParagraphVisible_2 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_2 && (
          <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
          <div className="overflow-x-auto">
                 <table className="min-w-full  bg-white border border-gray-300 mb-2">
                   <thead>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <th className="py-2 px-4 border-b ">SNo. </th>
                       <th className="py-2 px-4 border-b ">Particulars </th>
                       <th className="py-2 px-4 border-b">Amount in Rs.</th>
                       
                       
                     </tr>
                   </thead>
                   <tbody>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <td className="py-2 px-4 border-b text-center">1</td>
                       <td className="py-2 px-4 border-b text-center">Registration Fees</td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                      
                     </tr>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">2</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Tuition & Development Fees</td>
                       <td className="py-2 px-4 border-b text-center">111256</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">3</td>
                       <td className="py-2 px-4 border-b text-center">Exam & Enrollment Fees*</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">4</td>
                       <td className="py-2 px-4 border-b text-center">Medical Charges</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">1500</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">5</td>
                       <td className="py-2 px-4 border-b text-center">Book Bank Fees</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">3000</td>
                       
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">6</td>
                       <td className="py-2 px-4 border-b text-center">Activity Fee (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                    
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">7</td>
                       <td className="py-2 px-4 border-b text-center">PDP Charges (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">3500</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">8</td>
                       <td className="py-2 px-4 border-b text-center">Career Planning & Placement (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">9</td>
                       <td className="py-2 px-4 border-b text-center">Caution Money (Refundable)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">10</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">135756</td>
                      </tr>
                     {/* Add more rows as needed */}
                   </tbody>
                 </table>
               </div>
               <p className='text-gray-500'>*The Following payments will be paid by the students directly to the University as and when demanded:</p>
    <p className='text-gray-500'>a Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</p>
    <p className='text-gray-500'>b The aforesaid fees are subject to change, if any, by the University.</p>
     
    <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">Hostel Fee </th>
                 
                 <th className="py-2 px-4 border-b">For Boys: Triple Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Triple Seater</th>
                 </tr>
             </thead>
             <tbody>
               
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Rent & Mess Charges</td>
               
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Security ( Refundable )</td>
               
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Total</td>
                
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
               </tr>
              </tbody>
           </table>
           <p className='text-gray-500'>1. The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</p>
         <p className='text-gray-500'>2. Medical charges include Medical Insurance on hospitalization upto Rs.50,000/-, Accidental Insurance upto Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</p>
         <p className='text-gray-500'>Mode of Payment:</p>
         <p className='text-gray-500'>1. By DD/PO in favour of “Ajay Kumar Garg Engineering College payable at Ghaziabad or Delhi. Write your name and mobile number on reverse of the draft. It may be submitted by post or in person.</p>
         <p className='text-gray-500'>OR</p>
         <p className='text-gray-500'>2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
         <p className='text-gray-500'>Name of the Beneficiary : Ajay Kumar Garg Engineering College</p>
         <p className='text-gray-500'>Name of the Bank : Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</p>
         <p className='text-gray-500'>Bank Account No. : 508010250461 (Saving Bank Account)</p>
         <p className='text-gray-500'>RTGS/NEFT/IFSC Code : KKBK0005295</p>
         <p className='text-gray-500'>Note : This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
         </div>
        )}
        </div>
        <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_3 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_3}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Academic fee for the M.Tech students to be admitted during the session 2024-25</span>
          {setParagraphVisible_3 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_3 && (
          <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
          <div className="overflow-x-auto">
                 <table className="min-w-full  bg-white border border-gray-300 mb-2">
                   <thead>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <th className="py-2 px-4 border-b ">Particulars </th>
                       <th className="py-2 px-4 border-b ">I SEM</th>
                       <th className="py-2 px-4 border-b">II SEM</th>
                       <th className="py-2 px-4 border-b">Total</th>
                       
                     </tr>
                   </thead>
                   <tbody>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <td className="py-2 px-4 border-b text-center">Registration Fees</td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                     </tr>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">Tuition & Development Fees</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">55628</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">55628</td>
                       <td className="py-2 px-4 border-b text-center">111256</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">Exam & Enrollment Fees*</td>
                       <td className="py-2 px-4 border-b text-center">-</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td> 
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">Medical Charges</td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">1500</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">Caution Money (Refundable)</td>
                       <td className="py-2 px-4 border-b text-center">5000</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                       
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b text-center">63628</td>
                       <td className="py-2 px-4 border-b text-center">55628</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">119256</td>
                      </tr>
                     
                   </tbody>
                 </table>
               </div>
               <p className='text-gray-500'>*The Following payments will be paid by the students directly to the University as and when demanded:</p>
               <p className='text-gray-500'>a Examination Fee Rs. 1000/- and Digital Library Fee Rs. 1000/-.</p>
               <p className='text-gray-500'>b The aforesaid fees are subject to change, if any, by the University.</p>
     
    <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">Hostel Fee </th>
               <th className="py-2 px-4 border-b">For Boys: Single Seater</th> 
                 <th className="py-2 px-4 border-b">For Boys: Triple Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Double Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Triple Seater</th>
                 </tr>
             </thead>
             <tbody>
               
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Rent & Mess Charges</td>
                 <td className="py-2 px-4 border-b text-center">135000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                 <td className="py-2 px-4 border-b text-center">125000 </td>
                 <td className="py-2 px-4 border-b text-center">115000</td>
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Security ( Refundable )</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Total</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">		145000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">135000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
               </tr>
              </tbody>
           </table>
           <p className='text-gray-500'>1. The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</p>
         <p className='text-gray-500'>2. Medical charges include Medical Insurance on hospitalization upto Rs.50,000/-, Accidental Insurance upto Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</p>
         <p className='text-gray-500'>3. Fee is payable semester-wise.</p>
         <p className='text-gray-500'>4. (a) Scholarship equivalent to 25% of tuition fee (Approx. Rs. 25,000) for candidates securing
          65% (60% for AKGEC Alumni) or above aggregate marks in B.Tech</p>
         <p className='text-gray-500'>(b) Scholarship equivalent to 50% of tuition fee (Approx. Rs. 50,000) for candidates securing 70% (65% for AKGEC Alumni) or above aggregate marks in B.Tech.</p>
         <p className='text-gray-500'>(c) Scholarship equivalent to 75% tuition fee (Approx. Rs. 75,000) for candidates securing 75% (70% for AKGEC Alumni) or above aggregate marks in B.Tech.</p>
         <p className='text-gray-500'>(d) Scholarship equivalent to 100% tuition fee (Approx. Rs. 1,00,000) for candidates securing 80%
          (75% for AKGEC Alumni) or above aggregate marks in B.Tech.</p>
          <p className='text-gray-500'>Mode of Payment:</p>
          <p className='text-gray-500'>1. By DD/PO in favour of “Ajay Kumar Garg Engineering College payable at Ghaziabad or Delhi. Write your name and mobile number on reverse of the draft. It may be submitted by post or in person.</p>
          <p className='text-gray-500'>OR</p>
         <p className='text-gray-500'>2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
         
         <p className='text-gray-500'>Name of the Beneficiary : Ajay Kumar Garg Engineering College</p>
         <p className='text-gray-500'>Name of the Bank : Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</p>
         <p className='text-gray-500'>Bank Account No. : 508010250461 (Saving Bank Account)</p>
         <p className='text-gray-500'>RTGS/NEFT/IFSC Code : KKBK0005295</p>
         <p className='text-gray-500'>Note : This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
         </div>
        )}
        </div>
        <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_4 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_4}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Academic fee for the MCA students to be admitted during the session 2024-25 Under Fee Waiver Scheme</span>
          {setParagraphVisible_4 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_4 && (
          <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
          <div className="overflow-x-auto">
                 <table className="min-w-full  bg-white border border-gray-300 mb-2">
                   <thead>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <th className="py-2 px-4 border-b ">SNo. </th>
                       <th className="py-2 px-4 border-b ">Particulars </th>
                       <th className="py-2 px-4 border-b">Amount in Rs.</th>
                       
                       
                     </tr>
                   </thead>
                   <tbody>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <td className="py-2 px-4 border-b text-center">1</td>
                       <td className="py-2 px-4 border-b text-center">Registration Fees</td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                      
                     </tr>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">2</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Development Fees</td>
                       <td className="py-2 px-4 border-b text-center">10114</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">3</td>
                       <td className="py-2 px-4 border-b text-center">Exam & Enrollment Fees*</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">4</td>
                       <td className="py-2 px-4 border-b text-center">Medical Charges</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">1500</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">5</td>
                       <td className="py-2 px-4 border-b text-center">Book Bank Fees</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">2600</td>
                       
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">6</td>
                       <td className="py-2 px-4 border-b text-center">Activity Fee (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">10000</td>
                    
                     </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">8</td>
                       <td className="py-2 px-4 border-b text-center">Career Planning & Placement (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">10000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">9</td>
                       <td className="py-2 px-4 border-b text-center">Caution Money (Refundable)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">10</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">40714</td>
                      </tr>
                     {/* Add more rows as needed */}
                   </tbody>
                 </table>
               </div>
               <p className='text-gray-500'>*The Following payments will be paid by the students directly to the University as and when demanded:</p>
    <p className='text-gray-500'>a Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</p>
    <p className='text-gray-500'>b The aforesaid fees are subject to change, if any, by the University.</p>
     
    <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">Hostel Fee </th>
               <th className="py-2 px-4 border-b">For Boys: Double Seater</th>
                 <th className="py-2 px-4 border-b">For Boys: Triple Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Triple Seater</th>
                 </tr>
             </thead>
             <tbody>
               
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Rent & Mess Charges</td>
                 <td className="py-2 px-4 border-b text-center">125000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Security ( Refundable )</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Total</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	135000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
               </tr>
              </tbody>
           </table>
           <p className='text-gray-500'>1. The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</p>
         <p className='text-gray-500'>2. Medical charges include Medical Insurance on hospitalization upto Rs.50,000/-, Accidental Insurance upto Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</p>
         <p className='text-gray-500'>Mode of Payment:</p>
         <p className='text-gray-500'>1. By DD/PO in favour of “Ajay Kumar Garg Engineering College payable at Ghaziabad or Delhi. Write your name and mobile number on reverse of the draft. It may be submitted by post or in person.</p>
         <p className='text-gray-500'>OR</p>
         <p className='text-gray-500'>2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
         <p className='text-gray-500'>Name of the Beneficiary : Ajay Kumar Garg Engineering College</p>
         <p className='text-gray-500'>Name of the Bank : Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</p>
         <p className='text-gray-500'>Bank Account No. : 508010250461 (Saving Bank Account)</p>
         <p className='text-gray-500'>RTGS/NEFT/IFSC Code : KKBK0005295</p>
         <p className='text-gray-500'>Note : This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
         </div>
        )}
        </div>
        <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_5 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_5}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Academic fee for the B.Tech students to be admitted during the session 2024-25(Lateral Entry)</span>
          {setParagraphVisible_5 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_5 && (
          <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
          <div className="overflow-x-auto">
                 <table className="min-w-full  bg-white border border-gray-300 mb-2">
                   <thead>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <th className="py-2 px-4 border-b ">SNo. </th>
                       <th className="py-2 px-4 border-b ">Particulars </th>
                       <th className="py-2 px-4 border-b">Amount in Rs.</th>
                       
                       
                     </tr>
                   </thead>
                   <tbody>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                     <td className="py-2 px-4 border-b text-center">1</td>
                       <td className="py-2 px-4 border-b text-center">Registration Fees</td>
                       <td className="py-2 px-4 border-b text-center">1500</td>
                      
                     </tr>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">2</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Tuition & Development Fees</td>
                       <td className="py-2 px-4 border-b text-center">111256</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">3</td>
                       <td className="py-2 px-4 border-b text-center">Exam & Enrollment Fees*</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">4</td>
                       <td className="py-2 px-4 border-b text-center">Medical Charges</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">1500</td>
                      
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">5</td>
                       <td className="py-2 px-4 border-b text-center">Book Bank Fees</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">-</td>
                       
                     </tr>
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">6</td>
                       <td className="py-2 px-4 border-b text-center">PDP Charges</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">3500</td>
                    
                     </tr>
      
                     <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">7</td>
                       <td className="py-2 px-4 border-b text-center">Activity Fee (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">10000</td>
                    
                     </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">8</td>
                       <td className="py-2 px-4 border-b text-center">Career Planning & Placement (One Time)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">10000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">9</td>
                       <td className="py-2 px-4 border-b text-center">Caution Money (Refundable)</td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">5000</td>
                      </tr>
                      <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                       <td className="py-2 px-4 border-b text-center">10</td>
                       <td className="py-2 px-4 border-b text-center"></td>
                       <td className="py-2 px-4 border-b hidden sm:table-cell text-center">140256</td>
                      </tr>
                     {/* Add more rows as needed */}
                   </tbody>
                 </table>
               </div>
               <p className='text-gray-500'>*The Following payments will be paid by the students directly to the University as and when demanded:</p>
    <p className='text-gray-500'>a Examination Fee Rs. 7500/- and Digital Library Fee Rs. 700/-.</p>
    <p className='text-gray-500'>b The aforesaid fees are subject to change, if any, by the University.</p>
    <p className='text-gray-500'>** Book Bank Fees Differs Coursewise as follows:</p>
    <p className='text-gray-500'>1. Civil Engineering Rs 2500/-</p>
    <p className='text-gray-500'>2. Electronics & Communication Engineering Rs 2200/-</p>
    <p className='text-gray-500'>3. Information & Technology Rs 2000/-</p>
    <p className='text-gray-500'>4. Mechanical/ Electrical & Electronics Rs 1900/-</p>
    <p className='text-gray-500'>5. Rest of courses Rs 1800/-</p>
     
    <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
               <th className="py-2 px-4 border-b ">Hostel Fee </th>
               <th className="py-2 px-4 border-b">For Boys: Double Seater</th>
                 <th className="py-2 px-4 border-b">For Boys: Triple Seater</th>
                 <th className="py-2 px-4 border-b">For Girls: Triple Seater</th>
                 </tr>
             </thead>
             <tbody>
               
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Rent & Mess Charges</td>
                 <td className="py-2 px-4 border-b text-center">125000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                 <td className="py-2 px-4 border-b text-center">115000 </td>
                
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Security ( Refundable )</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	10000</td>
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">Total</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	135000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">	125000</td>
               </tr>
              </tbody>
           </table>
           <p className='text-gray-500'>1. The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</p>
         <p className='text-gray-500'>2. Medical charges include Medical Insurance on hospitalization upto Rs.50,000/-, Accidental Insurance upto Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</p>
         <p className='text-gray-500'>Mode of Payment:</p>
         <p className='text-gray-500'>1. By DD/PO in favour of “Ajay Kumar Garg Engineering College payable at Ghaziabad or Delhi. Write your name and mobile number on reverse of the draft. It may be submitted by post or in person.</p>
         <p className='text-gray-500'>OR</p>
         <p className='text-gray-500'>2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
         <p className='text-gray-500'>Name of the Beneficiary : Ajay Kumar Garg Engineering College</p>
         <p className='text-gray-500'>Name of the Bank : Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</p>
         <p className='text-gray-500'>Bank Account No. : 508010250461 (Saving Bank Account)</p>
         <p className='text-gray-500'>RTGS/NEFT/IFSC Code : KKBK0005295</p>
         <p className='text-gray-500'>Note : This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
         </div>
        )}
        </div>
    


</div>
</>
  )
}

export default Feestructure