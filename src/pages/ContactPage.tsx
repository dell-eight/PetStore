import { useState } from "react";
import { Clock, Heart, Mail, MapPin, PawPrint, Send } from "lucide-react";
import contactPetsImage from "@assets/contact/cat-dog-frame.png";
import messageIcon from "@assets/decorative/message-icon.png";
import orangeShape from "@assets/decorative/orange-shape-02.png";

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
      <div className="contact-layout">
        <div className="contact-hero-panel">
          <div className="contact-hero-copy">
            <p className="eyebrow">Contact</p>
            <h1>Contact WagTrail</h1>
            <p>
              Have a question about your order, our products, or pet walking essentials? Send us a
              message and we'll get back to you.
            </p>
          </div>

          <div className="contact-pet-scene" aria-label="Happy WagTrail pets">
            <img className="contact-pet-image" src={contactPetsImage} alt="Happy dog and cat in a WagTrail frame" />

            <div className="contact-float-card contact-float-help">
              <img src={messageIcon} alt="" aria-hidden="true" />
              <div>
                <strong>We're here</strong>
                <span>to help!</span>
              </div>
            </div>
            <div className="contact-float-card contact-float-send">
              <span aria-hidden="true">
                <Mail size={21} />
              </span>
              <div>
                <strong>Send us</strong>
                <span>a message</span>
              </div>
            </div>
            <div className="contact-float-card contact-float-pets">
              <span aria-hidden="true">
                <PawPrint size={22} />
              </span>
              <div>
                <strong>Happy pets,</strong>
                <span>happy life.</span>
              </div>
            </div>
            <div className="contact-float-card contact-float-replies">
              <span aria-hidden="true">
                <Heart size={22} />
              </span>
              <div>
                <strong>Quick replies,</strong>
                <span>happy tails.</span>
              </div>
            </div>
            <span className="contact-paw-trail" aria-hidden="true" />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-card-heading">
            <span aria-hidden="true">
              <img src={messageIcon} alt="" />
            </span>
            <div>
              <h2>Send us a message</h2>
              <p>We'll get back to you within 1-2 business days.</p>
            </div>
          </div>
          <label>
            Name
            <input
              value={form.name}
              placeholder="Your name"
              onChange={(event) => updateField("name", event.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              placeholder="Your email address"
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>
          <label>
            Subject
            <input
              value={form.subject}
              placeholder="What's this about?"
              onChange={(event) => updateField("subject", event.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              rows={6}
              value={form.message}
              placeholder="Tell us how we can help..."
              onChange={(event) => updateField("message", event.target.value)}
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}
          <button className="button button-primary" type="submit">
            Send Message
            <span aria-hidden="true">
              <Send size={18} />
            </span>
          </button>
        </form>

        <aside className="contact-card">
          <img className="contact-support-shape" src={orangeShape} alt="" aria-hidden="true" />
          <div className="contact-support-heading">
            <h2>Support details</h2>
            <p>Here's how you can reach us.</p>
          </div>

          <div className="contact-support-list">
            <div className="contact-support-item">
              <span aria-hidden="true">
                <Mail size={23} />
              </span>
              <p>
                <strong>Email</strong>
                <a href="mailto:support@wagtrail.com">support@wagtrail.com</a>
                <small>We'll reply to your message within 1-2 business days.</small>
              </p>
            </div>
            <div className="contact-support-item">
              <span aria-hidden="true">
                <MapPin size={23} />
              </span>
              <p>
                <strong>Location</strong>
                <b>Manila, Philippines</b>
                <small>Proudly supporting pet parents across the city.</small>
              </p>
            </div>
            <div className="contact-support-item">
              <span aria-hidden="true">
                <Clock size={23} />
              </span>
              <p>
                <strong>Response time</strong>
                <b>Within 1-2 business days</b>
                <small>We do our best to respond as quickly as possible.</small>
              </p>
            </div>
          </div>

          <div className="contact-community-card">
            <span aria-hidden="true">
              <PawPrint size={26} />
            </span>
            <strong>Thanks for being part of the WagTrail community!</strong>
            <Heart size={20} aria-hidden="true" />
          </div>
        </aside>
      </div>
    </section>
  );
}
