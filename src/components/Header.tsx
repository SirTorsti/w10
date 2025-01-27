import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'
import './styles/Header.css'

const Header = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
  return (
    <header className = "header">
      <h1>My App</h1>
      <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <button onClick={() => changeLanguage("fi")}>FI</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
        </ul>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <Suspense fallback="loading...">
      <Header />
    </Suspense>
  )
}