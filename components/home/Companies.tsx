import LedgerwiseLogo from 'public/home/companies/ledgerwise_logo.png'
import RepExpressLogo from 'public/home/companies/reptiles_express_logo.png'
import Company from './Company'

export type CompaniesProps = {
    className?: string
}

const Companies = ({ className }: CompaniesProps) => {

    return (
        <div
            className={className}>
            <Company
                img={LedgerwiseLogo}
                title='Ledgewise'
                link='https://ledgerwise.io' />
            <Company
                img={RepExpressLogo}
                title='Reptiles Express'
                link='https://reptilesexpress.com' />
        </div>
    )
}

export default Companies;