import React, {lazy} from 'react'

const LearningContent = lazy(()=>import('./Learning_Content'));
const Navbar = lazy(()=>import('./navbar'));
const Submenu = lazy(()=>import('./submenu'));
const Footer = lazy(()=>import('./Footer'));

const Learning = () => {
    return (
        <>
            <Navbar />
            <LearningContent />
            <Footer />
            <Submenu />
        </>
    )
}

export default Learning
