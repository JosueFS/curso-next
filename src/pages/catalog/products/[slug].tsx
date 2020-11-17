import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface IProduct {
  id: string;
  title: string;
}

interface ProductProps {
  products: IProduct[];
}

export default function Product() {
    const router = useRouter();

    return (
        <>
            <h1>Produtos</h1>
            <h3>{String(router.query.slug).toUpperCase()}</h3>
        </>
    )
}