"use client";

import React, { useState } from "react";

// --- Helper Components for Form Fields (for cleaner code) ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

// Reusable text/email/tel input component
const FormInput: React.FC<InputProps> = ({ label, id, error, ...props }) => (
    <div>
        <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 font-serif mb-1"
        >
            {label}
        </label>
        <input
            id={id}
            className={`w-full p-3 bg-white text-black font-serif border rounded-lg transition-colors
  ${
      error
          ? "border-red-500 focus:ring-red-500"
          : "border-[#2A4B40]/50 focus:ring-[#2A4B40]"
  }
  focus:outline-none focus:ring-2 focus:ring-opacity-75`}
            {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

// Reusable textarea component
const FormTextArea: React.FC<TextAreaProps> = ({
    label,
    id,
    error,
    ...props
}) => (
    <div>
        <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 font-serif mb-1"
        >
            {label}
        </label>
        <textarea
            id={id}
            rows={4}
            className={`w-full p-3 text-black bg-white border rounded-lg transition-colors
          ${
              error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#2A4B40]/50 focus:ring-[#2A4B40]"
          }
          focus:outline-none focus:ring-2 focus:ring-opacity-75`}
            {...props}
        ></textarea>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

// --- Main Contact Form Component ---

const ContactForm: React.FC = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        agree: false,
    });
    const [captchaChecked, setCaptchaChecked] = useState(false);
    // State for validation errors
    const [errors, setErrors] = useState<Partial<typeof formData>>({});

    const validate = (): Partial<typeof formData> => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message)
            newErrors.message = "Please let us know what brings you here.";
        if (!formData.preferredTime)
            newErrors.preferredTime =
                "Please provide a preferred contact time.";
        if (!formData.agree)
            newErrors.agree = "You must agree to be contacted." as any; // Type assertion for boolean
        if (!captchaChecked)
            newErrors.agree = "Please verify you are not a robot." as any;
        return newErrors;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === "checkbox";
        setFormData((prev) => ({
            ...prev,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
            // Here you would typically send the data to a server or API
            alert("Thank you for your message! We will be in touch soon.");
            // Optionally reset the form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                preferredTime: "",
                agree: false,
            });
            setErrors({});
        } else {
            console.log("Form has validation errors.");
        }
    };

    return (
        <section className="bg-gray-100 py-12 px-4 font-serif">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 border border-[#2A4B40] rounded-lg shadow-sm">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-serif text-[#2A4B40] mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600">
                        Simply fill out the brief fields below and Dr. Norman
                        will be in touch with you soon, usually within one
                        business day. This form is safe, private, and completely
                        free.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6 font-serif"
                >
                    <FormInput
                        label="Name"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        error={errors.name}
                        required
                    />
                    <FormInput
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        error={errors.email}
                        required
                    />
                    <FormInput
                        label="Phone"
                        id="phone"
                        name="phone"
                        type="number"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 234-5678"
                        error={errors.phone}
                        required
                    />
                    <FormTextArea
                        label="What brings you here?"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        error={errors.message}
                        required
                    />
                    <div>
                        <FormInput
                            label="Preferred time to reach you"
                            id="preferredTime"
                            name="preferredTime"
                            type="text"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            placeholder="e.g., Mornings, Afternoons, Evenings"
                            error={errors.preferredTime}
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Let us know when you&#39;re typically available for
                            a call or consultation.
                        </p>
                    </div>

                    {/* Checkbox for consent */}
                    <div className="flex items-start">
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="h-4 w-4 text-[#2A4B40] focus:ring-[#2A4B40]/50 border-gray-300 rounded mt-1"
                        />
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="agree"
                                className="font-medium text-gray-700"
                            >
                                I agree to be contacted via text and email.
                            </label>
                            {errors.agree && (
                                <p className="text-red-600">
                                    {errors.agree as string}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* reCAPTCHA Placeholder */}
                    <div className="bg-gray-100 border border-gray-300 rounded p-3 flex justify-between items-center">
                        <div className="flex items-center">
                            <div
                                onClick={() =>
                                    setCaptchaChecked((prev) => !prev)
                                }
                                className={`w-6 h-6 border-2 rounded-sm flex-shrink-0 cursor-pointer flex items-center justify-center transition
    ${
        captchaChecked
            ? "bg-[#2A4B40] border-[#2A4B40]"
            : "border-gray-400 bg-white"
    }`}
                            >
                                {captchaChecked && (
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </div>
                            
                            <span className="ml-3 text-gray-700">
                                I'm not a robot
                            </span>
                        </div>
                        <div className="text-center">
                            <svg
                                className="h-8 w-8 mx-auto text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a2 2 0 012-2h2a2 2 0 012 2v2z"
                                ></path>
                            </svg>
                            <p className="text-[10px] text-gray-500">
                                reCAPTCHA
                            </p>
                            <p className="text-[8px] text-gray-500">
                                Privacy - Terms
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#2A4B40] text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A4B40]"
                    >
                        Submit
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-xs text-gray-500">
                        © By clicking submit you consent to receive texts and
                        emails from Dr. Marcia T. Norman
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
