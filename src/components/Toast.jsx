import { useEffect } from 'react';

const Toast = ({ show, onClose, title, message, type = 'success', duration = 4000 }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    const iconClass = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill';

    return (
        show && (
            <div className="toast-container">
                <div className={`toast show toast-${type}`}>
                    <div className="toast-icon">
                        <i className={`bi ${iconClass}`}></i>
                    </div>
                    <div className="toast-content">
                        <div className="toast-title">{title}</div>
                        <div className="toast-message">{message}</div>
                    </div>
                    <button className="toast-close" onClick={onClose}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
            </div>
        )
    );
};

export default Toast;
