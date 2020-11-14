import { useRouter } from "next/router";

export default function OrderList() {
    const router = useRouter();

    return (
        <>
            <h1>Lista de Ordens</h1>
            <h3>{String(router.query.centrab).toUpperCase()}</h3>
        </>
    )
}