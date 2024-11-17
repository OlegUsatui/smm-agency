import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import Button from "@/components/Button/Button";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_5u5w38z", // Замените на ID вашего EmailJS сервиса
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
            console.error("Error sending email:", error);
        }
    };

    return (
        <section className={styles.contactSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane Smith"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="jane@framer.com"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="phone">Phone (Telegram name)</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="@telegramusername"
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.textAreaWrapper}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        className={styles.textArea}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <Button text={'Submit'} type="submit" className={styles.submitButton}></Button>
                {isSent && <p className={styles.successMessage}>Message sent successfully!</p>}
            </form>
        </section>
    );
};

export default ContactForm;
