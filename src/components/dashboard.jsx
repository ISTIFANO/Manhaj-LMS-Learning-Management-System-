import React, { useState } from 'react';
// import Loginimg from '../assets/Loginimg.jpg';
import Profile_etudiant_Crud from './Dashboard_etudiant/Profile_etudiant_Crud';
 import StudentCourses from './Dashboard_etudiant/StudentCourses.jsx';
 import ProfileEtudiant from './Dashboard_etudiant/ProfileEtudiant.jsx';
 import Enseignants from './Dashboard_etudiant/Enseignants.jsx';

 import Middleware from './Dashboard_enseignant/Middleware';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
 import Footer from './Footer';
function Dashboard() {

    
    const [currentView, setCurrentView] = useState('All Courses');

    const renderContent = () => {
        switch (currentView) {
           
            case 'All Courses':
                return <StudentCourses/>;
            case 'My Course':
                return <Enseignants/>;         
                   case 'Profile':
                return <ProfileEtudiant/>;  
            case 'Setthing':
                return <Profile_etudiant_Crud/>;
            default:
                return <h1 className="my-6 text-3xl">All Courses</h1>;
        }
    };

    return (
        <>
         <Middleware/>
        <Navbar/>
            <div className="flex bg-white">
                <div className="md:flex w-2/5 md:w-1/4 h-screen bg-white border-r hidden">
                    <div className="mx-auto py-10">
                        <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#219ebc] duration-150">Manhaj</h1>
                        <ul>
                       
                            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#219ebc] duration-150" onClick={() => setCurrentView('All Courses')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="font-semibold">Cours suivis</span>
                            </li>
                            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#219ebc] duration-150" onClick={() => setCurrentView('My Course')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <span className="font-semibold">enseignant</span>
                            </li>
                            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#219ebc] duration-150" onClick={() => setCurrentView('Profile')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="font-semibold">Profile</span>
                            </li>
                            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#219ebc] duration-150" onClick={() => setCurrentView('Setthing')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                <span className="font-semibold">paramètre</span>
                            </li>
                            <button className="w-full mt-10 bg-[#219ebc] rounded-full py-1.5 text-white">Learn</button>
                        </ul>
                    </div>
                </div>
                <div className="min-h-screen w-full bg-white border-l">
                   
                    <div className="mx-6">
                        {renderContent()}
                    </div>
                    <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
                        <div className="shadow-lg rounded-t-md overflow-hidden">
                            {/* Add your content here */}
                        </div>
                    </div>
                </div>
              
            </div>

            <Footer/>
        </>
    );
}

export default Dashboard;
