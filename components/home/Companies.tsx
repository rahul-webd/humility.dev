import LedgerwiseLogo from 'public/home/companies/ledgerwise_logo.png'
import RepExpressLogo from 'public/home/companies/reptiles_express_logo.png'
import Company from './Company'

export type CompaniesProps = {
    className?: string
}

const Companies = ({ className = '' }: CompaniesProps) => {

    return (
        <div
            className={`flex flex-wrap justify-center
                bg-amber-200 ${className}`}>
            <Company
                img={LedgerwiseLogo}
                title='Ledgewise'
                link='https://ledgerwise.io'
                className='m-4 md:mx-8' />
            <Company
                img={RepExpressLogo}
                title='Reptiles Express'
                link='https://reptilesexpress.com'
                className='m-4 md:mx-8' />
        </div>
    )
}

export default Companies;