import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface IProduct {
    id: string;
    title: string;
}

interface CategoryProps {
    products: IProduct[];
}

export default function Category() {
    const router = useRouter();

    return (
        <>
            <h1>Lista de Ordens</h1>
            <h3>{String(router.query.slug).toUpperCase()}</h3>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3333/categories`);
    const categories = await response.json();

    const paths = categories.map(cat => {
        return {
            params: { slug: cat.id },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async (context) => {
    const { slug } = context.params;

    const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
    const products = await response.json();

    return {
    props: {
        products,
    },
    revalidate: 60, //seconds
    }
}