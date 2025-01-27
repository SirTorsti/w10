
import { useTranslation } from 'react-i18next'
import '../styles/Header.css'

const Header = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
  return (
    <header className = "header">
      <h1>My App</h1>
      <nav>
        <ul className = "nav-list">
            <li><a href="/">{t('Home')}</a></li>
            <li><a href="/about">{t('About')}</a></li>
            <button onClick={() => changeLanguage("fi")}>FI</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header