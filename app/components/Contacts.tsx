"use client";

import React, { useRef, useState } from 'react';

const Contact = () => {
  return (
    React.createElement('section', { className: 'bg-gray-200 py-12', id: 'contact' },
      React.createElement('div', { className: 'container mx-auto max-w-4xl text-center' },
        React.createElement('h2', { className: 'text-yellow-600 text-sm font-bold mb-2 capitalize' }, 'Have A Question'),
        React.createElement('h3', { className: 'text-black text-4xl mb-8' }, 'Get In Touch'),
        React.createElement('form', { className: 'bg-gray-200 p-8 rounded-lg shadow-lg mx-auto' },
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', { className: 'flex flex-col' },
              React.createElement('label', { htmlFor: 'name', className: 'text-left text-xs mb-1' }, 'Name'),
              React.createElement('input', { type: 'text', id: 'name', name: 'name', placeholder: 'Name', required: true, className: 'py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' })
            ),
            React.createElement('div', { className: 'flex flex-col' },
              React.createElement('label', { htmlFor: 'email', className: 'text-left text-xs mb-1' }, 'Email'),
              React.createElement('input', { type: 'email', id: 'email', name: 'email', placeholder: 'Email', required: true, className: 'py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' })
            ),
            React.createElement('div', { className: 'flex flex-col' },
              React.createElement('label', { htmlFor: 'phone', className: 'text-left text-xs mb-1' }, 'Phone'),
              React.createElement('input', { type: 'tel', id: 'phone', name: 'phone', placeholder: 'Phone', required: true, className: 'py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' })
            ),
            React.createElement('div', { className: 'flex flex-col' },
              React.createElement('label', { htmlFor: 'company', className: 'text-left text-xs mb-1' }, 'Company'),
              React.createElement('input', { type: 'text', id: 'company', name: 'company', placeholder: 'Company', className: 'py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' })
            ),
            React.createElement('div', { className: 'col-span-1 md:col-span-2 flex flex-col' },
              React.createElement('label', { htmlFor: 'request-details', className: 'text-left text-xs mb-1' }, 'Request Details'),
              React.createElement('textarea', { id: 'request-details', name: 'request-details', placeholder: 'Request Details', rows: '5', required: true, className: 'py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' })
            )
          ),
          React.createElement('div', { className: 'flex justify-center mt-6' },
            React.createElement('button', { type: 'submit', className: 'bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300' }, 'Send Message')
          )
        )
      )
    )
  );
};

export default Contact;
