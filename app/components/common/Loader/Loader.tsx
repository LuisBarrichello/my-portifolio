interface LoaderProps {
    itensLoad: string;
}

const Loader = ({itensLoad}: LoaderProps) => {
    return (
        <p>Carregando {itensLoad}...</p>
    )
}

export default Loader