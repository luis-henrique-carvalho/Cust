import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.lista}>
          <li><FaFacebook /></li>
          <li><FaInstagram/></li>
          <li><FaLinkedin/></li>
        </ul>
        <p className={styles.copy_right}>
          <span>Cost</span> &copy; 2022
        </p>
    </footer>
  )
}

export default Footer