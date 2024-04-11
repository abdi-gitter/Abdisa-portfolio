import React from 'react';

export default function Github() {
  return (
      <div className="py-16 bg-white">
          <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
                  <h2 className="text-4xl text-gray-900 font-bold mb-4">
                      Explore My GitHub
                  </h2>
                  <p className="text-lg leading-relaxed">
                      Dive into my GitHub repositories to see 
                      a wide array of projects ranging from small 
                      scripts to large-scale web applications. 
                      Check out my <a href="https://github.com/abdi-gitter" 
                      target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 
                      font-semibold">GitHub </a> 
                      to follow my contributions to open-source software.
                  </p>
              </div>
          </div>
      </div>
  );
}
