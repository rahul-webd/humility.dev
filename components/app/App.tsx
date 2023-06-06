import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export type AppProps = {
    children?: ReactNode,
    className?: string
}

const App = ({ children, className = '' }: AppProps) => {

    return (
        <section
            className={`bg-amber-50 min-h-screen
                text-black pt-4 md:pt-6 flex flex-col
                justify-between px-4 pb-4 md:px-8 ${className}`}>
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </section>
    )
}

export default App;