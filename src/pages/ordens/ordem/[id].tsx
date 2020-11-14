import { useRouter } from "next/router";

export default function Ordem() {
    const router = useRouter();

    return (
        <>
            <h1>Ordem</h1>
            <h3>{router.query.id}</h3>
        </>
    )
}