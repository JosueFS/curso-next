import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const[recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);
  

  //FETCH: Quando não há necessidade de indexar informações para os motores de busca
  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      })
    });
  },[]);

  return (
    <div>
        <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recProd => {
            return (
              <li key={recProd.id}>
                {recProd.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}
