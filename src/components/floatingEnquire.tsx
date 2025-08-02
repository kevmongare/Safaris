import {useNavigate } from 'react-router-dom';
export default function floatingEnquire(){
    const navigate = useNavigate(); 
    return(
        <button 
              onClick={() => navigate('/enquire')}
               className="fixed bottom-10 left-10 z-50 bg-[var(--primary)] text-white  p-4 shadow-lg transition  "
    >
              Enquire Now
            </button>
    )
}