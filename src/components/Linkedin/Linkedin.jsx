import React from 'react';

export default function LinkedIn() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="bg-green-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-4xl text-gray-900 font-bold mb-4">
                        Connect on LinkedIn
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Join me on LinkedIn to expand our professional networks and 
                        engage with industry leaders across the globe. Visit 
                        my <a href="https://www.linkedin.com/in/abdisa-tolla-bedada/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="text-green-600 hover:text-green-800 
                        font-semibold">LinkedIn profile</a> to connect and collaborate.
                    </p>
                </div>
            </div>
        </div>
    );
}
