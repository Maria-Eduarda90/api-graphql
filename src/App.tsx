import { INFO_PERSON } from './graphql';
import { useQuery } from "@apollo/client";

import { Header } from './components/Header';
import { Search } from './components/Search';
import './styles/global.scss';
import { CharactersType } from './@types/Person';
import { Card } from './components/Card';

export function App() {
  const { loading, data } = useQuery<{ characters: CharactersType[] }>(INFO_PERSON);
  console.log(data?.characters)
  
  if(loading) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <Header/>
      <div className="container__app">
        <Search />
      </div>
      <section>
        {data?.characters.map((person, key) => {
          return(
            <Card key={key} characters={person.characters} />
          );
        })}
      </section>
    </>
  )
}
