// src/components/contact.tsx
import React from 'react';

interface ContactProps {
  openEnquirePopup?: () => void;
}

const Contact: React.FC<ContactProps> = ({ openEnquirePopup }) => {
  return (
    <section id="contact">
      {/* Your contact form */}
      <button onClick={openEnquirePopup} className="enquire-button">
        Enquire Now
      </button>
    </section>
  );
};

export default Contact;