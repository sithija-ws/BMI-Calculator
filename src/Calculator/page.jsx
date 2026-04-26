import React from 'react'
import { use } from 'react';
import { useState } from 'react'


const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("")

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
            {weight}
        </div>

        {/*inputs */}
        <div className='flex flex-col gap-3 pt-2 items-start justify-start w-70'>
            <input type='number' placeholder='Weight' onChange={(e)=>{setWeight(e.target.value)}}
                className='w-full bg-white/10 border border-white/10 text-white rounded-md placeholder:text-[#64748B]
                focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-center px-4 py-2'
            />

            <input type='number' placeholder='Height' onChange={(e)=>{setHeight(e.target.value)}}
                className='w-full bg-white/10 border border-white/10 text-white rounded-md placeholder:text-[#64748B]
                focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-center px-4 py-2'
            />


        </div>

        {/*buttons */}
        <div className='flex items-end justify-end gap-3'>
            <button className='w-22 h-9 bg-violet-800 border hover:bg-violet-950 border-white/10 text-white font-semibold tracking-wide text-[16px]  rounded-md transition-all'>
                Calculate
            </button>

            <button
              className='w-22 h-9 bg-white/5 hover:bg-red-500/10 border border-red-500/50 rounded-md text-red-400 font-semibold tracking-wide text-[17px]'>
                Reset
            </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Calculator
