import { ReactNode, useCallback, useEffect, useRef } from "react"

export type ScrollObserverProps = {
    children: ReactNode,
    action: () => void,
    deps?: any[],
    className?: string
}

const ScrollObserver = ({ 
    children, 
    action, 
    deps, 
    className = 'flex flex-col items-center'
}: ScrollObserverProps) => {
    const loaderRef = useRef(null)

    const observerCallback: IntersectionObserverCallback = useCallback(entries => {
        const target = entries[0]

        if (target.isIntersecting) {
            action()
        }
    }, [...(deps ?? [])])

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '20px',
            threshold: 0
        })

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }
    }, [])

    return (
        <div
            className={className}>
            { children }
            <div
                ref={loaderRef}>
            </div>
        </div>
    )
}

export default ScrollObserver;