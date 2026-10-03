import { useState } from "react";

import ContactForm from "../../components/contact/ContactForm";
import ContactImage from "../../components/contact/ContactImage";
import ContactDetails from "../../components/contact/ContactDetails";
import ContactMap from "../../components/contact/ContactMap";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitted(false);

    try {
      /*
       * Future API:
       *
       * await axios.post("/api/contact", formData);
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0A1128]">
      <main>
        {/* =====================================================
            CONTACT FORM + IMAGE
        ====================================================== */}

        <section
          className="
            mx-auto
            max-w-[1180px]
            px-5
            py-14
            sm:px-8
            lg:py-20
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
            "
          >
            <ContactForm
              formData={formData}
              submitting={submitting}
              submitted={submitted}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <ContactImage />
          </div>
        </section>

        {/* =====================================================
            CONSTRUCTION MIRROR DETAILS
        ====================================================== */}

        <ContactDetails />

        {/* =====================================================
            GOOGLE MAP
        ====================================================== */}

        <ContactMap />
      </main>
    </div>
  );
}

export default Contact;
