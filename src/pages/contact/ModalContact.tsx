import "./ModalContact.scss";

interface ModalContactProps {
  onClose: () => void;
}

export const ModalContact: React.FC<ModalContactProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>J’ai bien reçu votre demande, je vous recontacte au plus vite !</p>
        <button onClick={onClose} className="modal-close-button">
          Fermer
        </button>
      </div>
    </div>
  );
};
