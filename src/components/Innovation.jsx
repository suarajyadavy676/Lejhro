import React from 'react'

function Innovation() {
  return (
    <div className='w-[80%] mx-auto text-black my-20'>
    <h1 className='text-2xl font-bold'>Research Development</h1>
    <p>We at Lejhro believe Research & Development(R&D) as the best investment for the future.</p>
    <img src="./images/innovations.png" alt="img" className='my-4' />
    
    <div className='mt-10'>
      <h1 className='text-2xl font-bold'>Product Development</h1>
      <p>The journey of a new product development starts with an idea that should be untried or out of the box, forming the foundation for further development.</p>
      <img src="./images/img3.png" alt="img" className='my-4' />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 justify-between my-20'>
      <div>
      <p className='my-4'>R&D, an essential function for many businesses, is responsible for achieving breakthroughs in innovation.</p>
      <p className='my-4'>R&D always goes along with product development and behind every innovative product invention are decades of extensive research that ignites a spark within the organization.</p>
      <p className='my-4'>Research is the most endangered investment area because both the development of inventiveness and its prosperous understanding takes doubt, including the profitability of the creativeness. In a resolution, "huge R and D spending does not assure a more creative, more fabulous profit or more market share".</p>
      </div>
      <img src="./images/img1.png" alt="" />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
      <div>
        <h1 className='text-2xl font-bold my-4'>What is Innovation Product Development?</h1>
        <p className='my-4'>It's a cross-functional activity that involves the process of transforming innovative ideas into reality. The innovation product development methodology consists of stages like ideation, design, validation, and launch of the final product.</p>
        <p className='my-4'>Additionally, this process also includes regular reviews of customer data, their problem statement, and feedback.</p>
      </div>
      <img src="./images/img4.png" alt="img" />
    </div> 
    </div>
  )
}

export default Innovation
