import React from 'react';
import Section1 from '../components/Section1/Index';
import Section2 from '../components/Section2';

export default function index() {
    return (
        <div className="w-full h-screen bg-black">
            <Section1 />
            <Section2 />
        </div>
    );
}
