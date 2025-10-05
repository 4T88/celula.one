import React from 'react';

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
  icon?: string;
  functionText?: string;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose, icon, functionText }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 animate-zoom-in overflow-hidden">
        <div className="-mx-6 -mt-6 px-6 py-4 bg-blue-50 rounded-t-xl border-b border-blue-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{icon ? `${icon} ` : ''}{title}</h3>
            <button aria-label="Închide" className="text-gray-600 hover:text-gray-900" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="mt-4 text-gray-700 text-base leading-relaxed">
          <p className="mb-4">{description}</p>
          <div className="mt-2 text-base text-gray-700">
            <span className="font-medium">💡 Funcția principală:</span> {functionText ?? description}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={onClose}>Închide</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


