import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  document.body.dir = i18n.dir();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => changeLanguage('en')}>
          English
        </button>
        <button type="button" onClick={() => changeLanguage('ru')}>
          Русский
        </button>
        <button type="button" onClick={() => changeLanguage('he')}>
          עברית
        </button>
        <p>
          {t('welcomeReact')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
