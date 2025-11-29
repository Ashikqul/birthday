import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import Snowfall from 'react-snowfall'; // ❄️ Snowfall ইমপোর্ট

const RootLayout = () => {
    return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-300 via-amber-300 to-[#BA3350] flex flex-col overflow-hidden">



            
            {/* ❄️ Snow Effect Layer */}
            <Snowfall 
                snowflakeCount={150} // তুষারের সংখ্যা (যত বেশি, তত ঘন)
                color="#ffffff" // তুষারের রঙ (সাদা)
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 50,
                }}
            />

            {/* Navbar */}
            <Navbar />

            {/* Content Area */}
            <main className="flex-grow relative z-5">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RootLayout;
