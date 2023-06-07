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
                justify-between pb-4 ${className}`}>
            <div>
                <Header
                    className="mb-8" />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </section>
    )
}

export default App;