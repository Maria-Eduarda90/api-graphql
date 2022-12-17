import { Header } from './components/Header';
import { Search } from './components/Search';
import './styles/global.scss';

export function App() {
  return (
    <>
      <Header/>
      <div className="container__app">
        <Search />
      </div>
    </>
  )
}
