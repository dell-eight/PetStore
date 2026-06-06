import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, Heart, Mail, MapPin, PawPrint, Send } from "lucide-react";
import contactPetsImage from "@assets/contact/cat-dog-frame_2.png";
import messageIcon from "@assets/decorative/message-icon.png";
import orangeShape from "@assets/decorative/orange-shape-02.png";
import { sectionStagger } from "@/lib/motion";

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

function keepContactTransformOnCompositor(_: unknown, generatedTransform: string) {
  return generatedTransform === "none" ? "translateZ(0)" : `${generatedTransform} translateZ(0)`;
}

const contactItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.52, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const contactPanelItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { duration: 0.62, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const contactFloatItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.56, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const contactImageItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.72, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

export function ContactPage() {
  const reduceMotion = useReducedMotion();
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
          <motion.div
            className="contact-hero-copy"
            variants={sectionStagger}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
          >
            <motion.p className="eyebrow" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              Contact
            </motion.p>
            <motion.h1 variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              Contact WagTrail
            </motion.h1>
            <motion.p variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              Have a question about your order, our products, or pet walking essentials? Send us a
              message and we'll get back to you.
            </motion.p>
          </motion.div>

          <motion.div
            className="contact-pet-scene"
            aria-label="Happy WagTrail pets"
            variants={sectionStagger}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
          >
            <motion.img
              className="contact-pet-image"
              src={contactPetsImage}
              alt="Happy dog and cat in a WagTrail frame"
              variants={contactImageItem}
              transformTemplate={keepContactTransformOnCompositor}
            />

            <motion.div
              className="contact-float-card contact-float-help"
              variants={contactFloatItem}
              whileHover={reduceMotion ? undefined : { translateY: -4 }}
              transformTemplate={keepContactTransformOnCompositor}
            >
              <img src={messageIcon} alt="" aria-hidden="true" />
              <div>
                <strong>We're here</strong>
                <span>to help!</span>
              </div>
            </motion.div>
            <motion.div
              className="contact-float-card contact-float-send"
              variants={contactFloatItem}
              whileHover={reduceMotion ? undefined : { translateY: -4 }}
              transformTemplate={keepContactTransformOnCompositor}
            >
              <span aria-hidden="true">
                <Mail size={21} />
              </span>
              <div>
                <strong>Send us</strong>
                <span>a message</span>
              </div>
            </motion.div>
            <motion.div
              className="contact-float-card contact-float-pets"
              variants={contactFloatItem}
              whileHover={reduceMotion ? undefined : { translateY: -4 }}
              transformTemplate={keepContactTransformOnCompositor}
            >
              <span aria-hidden="true">
                <PawPrint size={22} />
              </span>
              <div>
                <strong>Happy pets,</strong>
                <span>happy life.</span>
              </div>
            </motion.div>
            <motion.div
              className="contact-float-card contact-float-replies"
              variants={contactFloatItem}
              whileHover={reduceMotion ? undefined : { translateY: -4 }}
              transformTemplate={keepContactTransformOnCompositor}
            >
              <span aria-hidden="true">
                <Heart size={22} />
              </span>
              <div>
                <strong>Quick replies,</strong>
                <span>happy tails.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={contactPanelItem}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          transformTemplate={keepContactTransformOnCompositor}
        >
          <motion.div className="contact-card-heading" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            <span aria-hidden="true">
              <img src={messageIcon} alt="" />
            </span>
            <div>
              <h2>Send us a message</h2>
              <p>We'll get back to you within 1-2 business days.</p>
            </div>
          </motion.div>
          <motion.label variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            Name
            <input
              value={form.name}
              placeholder="Your name"
              onChange={(event) => updateField("name", event.target.value)}
            />
          </motion.label>
          <motion.label variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            Email
            <input
              type="email"
              value={form.email}
              placeholder="Your email address"
              onChange={(event) => updateField("email", event.target.value)}
            />
          </motion.label>
          <motion.label variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            Subject
            <input
              value={form.subject}
              placeholder="What's this about?"
              onChange={(event) => updateField("subject", event.target.value)}
            />
          </motion.label>
          <motion.label variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            Message
            <textarea
              rows={6}
              value={form.message}
              placeholder="Tell us how we can help..."
              onChange={(event) => updateField("message", event.target.value)}
            />
          </motion.label>
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                className="form-error"
                key="error"
                variants={contactItem}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transformTemplate={keepContactTransformOnCompositor}
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                className="form-success"
                key="success"
                variants={contactItem}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transformTemplate={keepContactTransformOnCompositor}
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>
          <motion.div variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            <button className="button button-primary" type="submit">
              Send Message
              <span aria-hidden="true">
                <Send size={18} />
              </span>
            </button>
          </motion.div>
        </motion.form>

        <motion.aside
          className="contact-card"
          variants={contactPanelItem}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          transformTemplate={keepContactTransformOnCompositor}
        >
          <motion.img
            className="contact-support-shape"
            src={orangeShape}
            alt=""
            aria-hidden="true"
            variants={contactItem}
            transformTemplate={keepContactTransformOnCompositor}
          />
          <motion.div className="contact-support-heading" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
            <h2>Support details</h2>
            <p>Here's how you can reach us.</p>
          </motion.div>

          <motion.div className="contact-support-list" variants={sectionStagger}>
            <motion.div className="contact-support-item" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              <span aria-hidden="true">
                <Mail size={23} />
              </span>
              <p>
                <strong>Email</strong>
                <a href="mailto:support@wagtrail.com">support@wagtrail.com</a>
                <small>We'll reply to your message within 1-2 business days.</small>
              </p>
            </motion.div>
            <motion.div className="contact-support-item" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              <span aria-hidden="true">
                <MapPin size={23} />
              </span>
              <p>
                <strong>Location</strong>
                <b>Manila, Philippines</b>
                <small>Proudly supporting pet parents across the city.</small>
              </p>
            </motion.div>
            <motion.div className="contact-support-item" variants={contactItem} transformTemplate={keepContactTransformOnCompositor}>
              <span aria-hidden="true">
                <Clock size={23} />
              </span>
              <p>
                <strong>Response time</strong>
                <b>Within 1-2 business days</b>
                <small>We do our best to respond as quickly as possible.</small>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-community-card"
            variants={contactItem}
            whileHover={reduceMotion ? undefined : { translateY: -3 }}
            transformTemplate={keepContactTransformOnCompositor}
          >
            <span aria-hidden="true">
              <PawPrint size={26} />
            </span>
            <strong>Thanks for being part of the WagTrail community!</strong>
            <Heart size={20} aria-hidden="true" />
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
