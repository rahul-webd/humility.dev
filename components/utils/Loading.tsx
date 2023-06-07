import Spinner from "./Spinner";

export type LoadingProps = {
    loading: boolean,
    marginVert?: string,
    className?: string
}

const Loading = ({
    loading,
    marginVert = 'my-2',
    className = ''
}: LoadingProps) => {

    return (
        <div
            className={`flex justify-center ${className}`}>
            {
                loading
                    && (
                        <Spinner
                            className={marginVert} />
                    )
            }
        </div>
    )
}

export default Loading;