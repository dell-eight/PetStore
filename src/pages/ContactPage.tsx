import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please complete all fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.info("WagTrail contact form submission", form);
    setSuccess("Thanks for your message. Email delivery is a pre-launch TODO, so this was logged locally for now.");
    setForm(initialState);
  }

  return (
    <section className="page-shell contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Contact WagTrail</h1>
        <p>Have a question about your order, our products, or pet walking essentials? Send us a message and we will get back to you.</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={form.name} onChange={(event) => updateField("name", event.target.value)} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
          </label>
          <label>
            Subject
            <input value={form.subject} onChange={(event) => updateField("subject", event.target.value)} />
          </label>
          <label>
            Message
            <textarea rows={6} value={form.message} onChange={(event) => updateField("message", event.target.value)} />
          </label>
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}
          <button className="button button-primary" type="submit">
            Send Message
          </button>
        </form>

        <aside className="contact-card">
          <h2>Support details</h2>
          <p>
            <strong>Email</strong>
            <a href="mailto:support@wagtrail.com">support@wagtrail.com</a>
            <span>Placeholder email until the support inbox is created.</span>
          </p>
          <p>
            <strong>Location</strong>
            Manila, Philippines
          </p>
          <p>
            <strong>Response time</strong>
            Within 1-2 business days
          </p>
        </aside>
      </div>
    </section>
  );
}
