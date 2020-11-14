import { GetStaticProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: IProduct[];
}

export default function Top10({ products }: ITop10Props) {
  return (
    <div>
        <section>
        <Title>Products</Title>

        <ul>
          {products.map(recProd => {
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

export const getStaticProps: GetStaticProps<ITop10Props> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 60, //seconds
  }
}