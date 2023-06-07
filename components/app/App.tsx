import { ReactNode, createContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { CONTENTFUL_DELIVERY_KEY, CONTENTFUL_SPACE } from "../../utils/constants";
import { ContentfulClientApi, createClient } from "contentful";

export type AppProps = {
    children?: ReactNode,
    className?: string
}

type ContextProps = {
    cfClient: ContentfulClientApi
}

export const AppContext = createContext<ContextProps | null>(null)

const App = ({ children, className = '' }: AppProps) => {    
    
    const client = createClient({
        space: CONTENTFUL_SPACE as string,
        accessToken: CONTENTFUL_DELIVERY_KEY as string
    })
    

    return (
        <AppContext.Provider
            value={{
                cfClient: client
            }}>
            <section
                className={`bg-amber-50 min-h-screen
                    text-black pt-4 md:pt-6 flex flex-col
                    justify-between pb-4 ${className}`}>
                <div
                    className="mb-24 md:mb-32">
                    <Header
                        className="mb-8" />
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
            </section>
        </AppContext.Provider>
    )
}

export default App;