"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `${formData.message}\n\n${formData.name} <${formData.email}>`;
    window.location.href = `mailto:chhayly.sreng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
}
