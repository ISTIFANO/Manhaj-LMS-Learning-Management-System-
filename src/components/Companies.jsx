import React from 'react'
import Company1 from '../assets/company-logo-1.png'
import Company2 from '../assets/company-logo-2.png'
import Company3 from '../assets/company-logo-3.png'
import Company4 from '../assets/company-logo-4.png'

const Companies = () => {
  return (
    <section className='w-full bg-white py-[50px] justify-center items-center p-4'>
        {/* Conteneur principal */}
        <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
            {/* Titre */}
            <h1 className='text-center text-xl font-bold text-[#536e90]'>Faites confiance à plus de 25 000 équipes à travers le monde</h1>
            {/* Description */}
            <p className='text-center text-[#536e96] text-2x1 py-2'>Les entreprises leaders utilisent les mêmes cours pour aider leurs employés à maintenir leurs compétences à jour</p>
            {/* Grille des logos des entreprises */}
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-x-12'>
                <img src={Company1} alt="company1" />
                <img src={Company2} alt="company2" />
                <img src={Company3} alt="company3" />
                <img src={Company4} alt="company4" />
            </div>
        </div>
    </section>
  )
}

export default Companies
