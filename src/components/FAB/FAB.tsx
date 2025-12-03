
import styles from './FAB.module.css';
import Telecon from '../../assets/icons/Telephone.svg'

interface FABProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

const FAB = ({ onClick, icon }: FABProps) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <img src={Telecon} alt="Phone" className={styles.icon} />
        <span className={styles.caption}>Talk to us</span>
      </div>
    </button>
  );
};

export default FAB;
