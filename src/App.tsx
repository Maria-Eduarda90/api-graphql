import { INFO_PERSON } from './graphql';
import { useQuery } from "@apollo/client";
import { Header } from './components/Header';
import { Search } from './components/Search';
import './styles/global.scss';
import { Card } from './components/Card';

export function App() {
  const { loading } = useQuery(INFO_PERSON);
  
  if(loading) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <Header/>
      <section className="container__card">
        {/* {data?.characters.results.map((item, key) => {
          return(
            <div>
              <Card
                key={key}
                image={item.image}
                status={item.status}
                gender={item.gender}
                name={item.name}
                species={item.species}
                location={item.location}
                origin={item.origin}
              />
            </div>
          );
        })} */}

        <Card />
      </section>
    </>
  )
}
