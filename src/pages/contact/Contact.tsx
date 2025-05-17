import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Contact.scss";
import { ModalContact } from "./ModalContact";

export const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  /*const handleChange = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis :");

    /* Eventuel utilisation d'un fetch vers une API */

    emailjs
      .sendForm(
        "service_form_090795", // service_ID
        "template_5nbw2sp", // template_id
        formRef.current!,
        "EyQwAjStVFvacfepl" // public_key
      )
      .then(
        () => {
          setShowModal(true);
          formRef.current?.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  //

  return (
    <main>
      <section id="contact">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={10} required></textarea>
          <input type="hidden" name="source" value="portfolio-contact" />

          <button type="submit">Envoyer</button>
        </form>
      </section>

      {showModal && <ModalContact onClose={() => setShowModal(false)} />}
    </main>
  );
};

/****interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  /*const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  }); 

  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);

    setShowModal(true);
    // Eventuel utilisation d'un fetch vers une API

    emailjs
      .sendForm(
        "service_form_090795", // service_ID
        "template_5nbw2sp", // template_id
        formRef.current,
        "EyQwAjStVFvacfepl" // public_key
      .then(
        () => {
          setShowModal(true);
          formRef.current?.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  //

  return (
    <main>
      <section id="contact">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} 
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </section>

      {showModal && <ModalContact onClose={handleCloseModal} />}
    </main>
  );
};
 */
