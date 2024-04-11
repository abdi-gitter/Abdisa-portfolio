import React from 'react';

export default function Contact() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="bg-red-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-4xl text-gray-900 font-bold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg leading-relaxed">
                        For any inquiries or further information, please contact us at:
                        <ul>
                            <li>Email: <a href="mailto:abdisat.bedada@gmail.com" className="text-red-600 hover:text-red-800 font-semibold">abdisat.bedada@gmail.com</a></li>
                            <li>Phone: <a href="tel:+1-825-488-9476" className="text-red-600 hover:text-red-800 font-semibold">+1-825-488-9476</a></li>
                            <li>Address: 353 Stonegate dr, Winkler, Canada</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}
