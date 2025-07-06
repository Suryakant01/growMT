"use client";

import React, { useState, useEffect } from "react";

// --- Helper Components for Form Fields ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const FormInput: React.FC<InputProps> = ({ label, id, error, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 font-serif mb-1">
            {label}
        </label>
        <input
            id={id}
            className={`w-full p-3 bg-white text-black font-serif border rounded-lg transition-colors
                ${error ? "border-red-500 focus:ring-red-500" : "border-[#2A4B40]/50 focus:ring-[#2A4B40]"}
                focus:outline-none focus:ring-2 focus:ring-opacity-75`}
            {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

const FormTextArea: React.FC<TextAreaProps> = ({ label, id, error, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 font-serif mb-1">
            {label}
        </label>
        <textarea
            id={id}
            rows={4}
            className={`w-full p-3 text-black bg-white border rounded-lg transition-colors
                ${error ? "border-red-500 focus:ring-red-500" : "border-[#2A4B40]/50 focus:ring-[#2A4B40]"}
                focus:outline-none focus:ring-2 focus:ring-opacity-75`}
            {...props}
        ></textarea>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

// --- New Success Modal Component ---

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            aria-modal="true"
            role="dialog"
            onClick={onClose} // Close on overlay click
        >
            <div 
                className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center border-t-8 border-[#2A4B40]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#2A4B40] mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Dr. Norman will be in touch with you soon.
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#2A4B40] text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A4B40]"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// --- Main Contact Form Component ---

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: "", preferredTime: "", agree: false,
    });
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const validate = (): Partial<typeof formData> => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message) newErrors.message = "Please let us know what brings you here.";
        if (!formData.preferredTime) newErrors.preferredTime = "Please provide a preferred contact time.";
        if (!formData.agree) newErrors.agree = "You must agree to be contacted." as any;
        if (!captchaChecked) newErrors.agree = "Please verify you are not a robot." as any; // Re-using agree error field for simplicity
        
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === "checkbox";
        setFormData((prev) => ({
            ...prev,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Reset form after modal is closed
        setFormData({ name: "", email: "", phone: "", message: "", preferredTime: "", agree: false });
        setCaptchaChecked(false);
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
            // Instead of alert, open the modal
            setIsModalOpen(true);
        } else {
            console.log("Form has validation errors.");
        }
    };

    return (
        <>
            <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <section className="bg-gray-100 py-12 px-4 font-serif">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 border border-[#2A4B40] rounded-lg shadow-sm">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-serif text-[#2A4B40] mb-4">Get In Touch</h2>
                        <p className="text-gray-600">
                            Simply fill out the brief fields below and Dr. Norman will be in
                            touch with you soon, usually within one business day. This form is
                            safe, private, and completely free.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6 font-serif">
                        <FormInput label="Name" id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" error={errors.name} required />
                        <FormInput label="Email" id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" error={errors.email} required />
                        <FormInput label="Phone" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 234-5678" error={errors.phone} required />
                        <FormTextArea label="What brings you here?" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can I help you?" error={errors.message} required />
                        <div>
                            <FormInput label="Preferred time to reach you" id="preferredTime" name="preferredTime" type="text" value={formData.preferredTime} onChange={handleChange} placeholder="e.g., Mornings, Afternoons, Evenings" error={errors.preferredTime} required />
                            <p className="text-xs text-gray-500 mt-1">Let us know when you're typically available for a call or consultation.</p>
                        </div>

                        <div className="flex items-start">
                            <input id="agree" name="agree" type="checkbox" checked={formData.agree} onChange={handleChange} className="h-4 w-4 text-[#2A4B40] focus:ring-[#2A4B40]/50 border-gray-300 rounded mt-1" />
                            <div className="ml-3 text-sm">
                                <label htmlFor="agree" className="font-medium text-gray-700">I agree to be contacted via text and email.</label>
                                {errors.agree && <p className="text-red-600">{errors.agree as string}</p>}
                            </div>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded p-3 flex justify-between items-center">
                            <div className="flex items-center">
                                <div onClick={() => setCaptchaChecked((prev) => !prev)} className={`w-6 h-6 border-2 rounded-sm flex-shrink-0 cursor-pointer flex items-center justify-center transition ${captchaChecked ? "bg-[#2A4B40] border-[#2A4B40]" : "border-gray-400 bg-white"}`}>
                                    {captchaChecked && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <span className="ml-3 text-gray-700">I'm not a robot</span>
                            </div>
                            <div className="text-center">
                                <svg className="h-8 w-8 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a2 2 0 012-2h2a2 2 0 012 2v2z"></path></svg>
                                <p className="text-[10px] text-gray-500">reCAPTCHA</p>
                                <p className="text-[8px] text-gray-500">Privacy - Terms</p>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#2A4B40] text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A4B40]">
                            Submit
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-500">
                            © By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;