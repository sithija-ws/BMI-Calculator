import React from 'react'

const Calculator = () => {
  return (
    <div className='min-h-screen bg-[#090C1D] flex justify-center items-center'>
      <div 
        className='bg-white/5 max-w-2xl w-full h-[350px] border-2 border-white/10
        backdrop-blur-2xl rounded-xl  gap-4 mt-4 flex flex-col  items-center'>
        
        {/*head text*/}
        <h1 className='text-[#F8FAFC] mb-3 text-2xl mt-4'>BMI CALCULATOR</h1>

        {/*display*/}
        <div className='bg-black/20 w-100 h-20 flex items-center 
                        
                        font-bold font-mono justify-center text-4xl tracking-tighter text-slate-800/80'>
            10
        </div>

        {/*inputs */}
        <div className='flex flex-col gap-3 pt-2 items-start justify-start w-[280px]'>
            <input type='number' placeholder='Weight' 
                className='w-full bg-white/10 border border-white/10 text-white rounded-md placeholder:text-[#64748B]
                focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-center px-4 py-2'
            />

            <input type='number' placeholder='Height' 
                className='w-full bg-white/10 border border-white/10 text-white rounded-md placeholder:text-[#64748B]
                focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-center px-4 py-2'
            />


        </div>

        
        
        
      </div>
    </div>
  )
}

export default Calculator
