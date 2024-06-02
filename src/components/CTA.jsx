import React from 'react'
import cta from '../assets/cta.png'

const CTA = () => {
  return (
    <section className='w-full bg-white py-24 p-4 items-center'>
        {/* Conteneur principal */}
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]'>
            {/* Image de mise en avant */}
            <img src={cta} alt="hero" className='w-[500px] mx-auto'/>
            {/* Contenu de l'appel à l'action */}
            <div className='flex flex-col justify-start gap-4'>
                <div>
                    {/* Titre de l'appel à l'action */}
                    <h1 className='md:leading-[42px] py-8 md:text-3xl text-lg font-semibold'>
                        Rejoignez l'une des meilleures <span className='text-[#208486]'>plateformes de cours en ligne</span> du monde entier
                    </h1>
                    {/* Description */}
                    <p className='py-2 text-lg text-gray-900'>Diverses versions ont évolué au fil des ans</p>
                    {/* Bouton d'inscription */}
                    <button className='max-[780px]:w-full px-8 text-white py-3 bg-[#208446]'>Inscrivez-vous gratuitement</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA
