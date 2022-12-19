import { INFO_PERSON } from './graphql';
import { useQuery } from "@apollo/client";

import { Header } from './components/Header';
import { Search } from './components/Search';
import './styles/global.scss';
import { PersonType } from './@types/Person';
import { Card } from './components/Card';

export function App() {
  const { loading, error, data } = useQuery<{ characters: PersonType[] }>(INFO_PERSON);
  console.log(data)
  
  if(loading) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <Header/>
      <div className="container__app">
        <Search />
      </div>
      {data?.characters.map((person, index) => <Card key={index} characters={person.characters}/>
      )}
    </>
  )
}
