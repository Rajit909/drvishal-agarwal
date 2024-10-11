import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website!</h2>
        <p>We’re happy to have you back!</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
