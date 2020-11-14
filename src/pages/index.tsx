import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: IHomeProps) {
  //FETCH: Quando não há necessidade de indexar informações para os motores de busca
  //SERVER SIDE RENDERING: Quando há informações que precisam ser indexadas pelos motores de busca
  //STATIC SITE GENERATION: Quando temos páginas que não precisarão receber informações atualizadas frequentemente

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

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts,
    }
  }
}