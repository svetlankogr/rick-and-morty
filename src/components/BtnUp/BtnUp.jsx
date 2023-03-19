import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import css from './BtnUp.module.css';

export const BtnUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 250 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-button">
      {visible && (
        <button
          className={css.btnUp}
          onClick={scrollToTop}
          aria-label="scroll to top"
        >
          <FaArrowCircleUp color="white" size={20} />
        </button>
      )}
    </div>
  );
};
