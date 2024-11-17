import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import Button from "@/components/Button/Button";

// Вспомогательный хук для управления состоянием формы
const useContactForm = (plan) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (plan) {
            setFormData((prevData) => ({
                ...prevData,
                message: `Hello! I’m interested in the ${plan.title} plan. I would like to learn more details and start collaborating. Looking forward to your response!`,
            }));
        }
    }, [plan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            await emailjs.send(
                "service_xjle318", // Замените на ID вашего EmailJS сервиса
                "template_qk3cwej", // Замените на ID вашего EmailJS шаблона
                formData,
                "M0dKTMHYm72ukRtrr" // Замените на ваш Public Key (User ID)
            );
            setIsSent(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            setErrorMessage("Failed to send the message. Please try again later.");
            console.error("Error sending email:", error);
        }
    };

    return { formData, isSent, errorMessage, handleChange, handleSubmit };
};

const ContactForm = ({ plan }) => {
    const { formData, isSent, errorMessage, handleChange, handleSubmit } = useContactForm(plan);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <section className={styles.contactSection}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.inputGroup}>
                    <InputField
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="jane@framer.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <InputField
                    label="Phone (Telegram name)"
                    type="text"
                    name="phone"
                    placeholder="@telegramusername"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <TextAreaField
                    label="Message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button text="Submit" type="submit" className={styles.submitButton} />
                {isSent && <p className={styles.successMessage}>Message sent successfully!</p>}
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </form>
        </section>
    );
};

// Компонент для текстовых полей
const InputField = ({ label, type, name, placeholder, value, onChange, required = false }) => (
    <div className={styles.inputWrapper}>
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.input}
            required={required}
        />
    </div>
);

// Компонент для текстовой области
const TextAreaField = ({ label, name, placeholder, value, onChange, required = false }) => (
    <div className={styles.textAreaWrapper}>
        <label htmlFor={name}>{label}</label>
        <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.textArea}
            required={required}
        ></textarea>
    </div>
);

export default ContactForm;
