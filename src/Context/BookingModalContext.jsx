import { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal/BookingModal';

const BookingModalContext = createContext(null);

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      {isOpen && <BookingModal onClose={closeModal} />}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}