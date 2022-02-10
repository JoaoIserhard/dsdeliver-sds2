import './styles.css'
import { ReactComponent as Youtube } from '../assets/img/youtube.svg'
import { ReactComponent as Linkedin } from '../assets/img/linkedin.svg'
import { ReactComponent as Instagram } from '../assets/img/instagram.svg'

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://youtube.com/c/DevSuperior" target="_new">
          <Youtube />
        </a>
        <a href="https://linkedin.com/school/devsuperior/" target="_new">
          <Linkedin />          
        </a>
        <a href="https://instagram.com/devsuperior.ig/" target="_new">
          <Instagram />          
        </a>
      </div>
    </footer>
  )
}

export default Footer;