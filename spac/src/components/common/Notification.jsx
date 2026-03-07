import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';
import './Notification.css';

const Notification = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [onClose, duration]);

  return (
    <AnimatePresence>
      <motion.div 
        className={`notification-toast ${type}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <div className="notification-icon">
          {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
        </div>
        <div className="notification-message">
          {message}
        </div>
        <button className="notification-close" onClick={onClose}>
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
