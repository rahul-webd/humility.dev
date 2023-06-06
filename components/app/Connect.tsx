import { FaArrowRight, FaTelegram, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import ConnectBtn from './ConnectBtn'


export type ConnectProps = {
    className?: string
}

const Connect = ({
    className = ''
}: ConnectProps) => {

    return (
        <section
            className={`flex flex-col md:flex-row md:items-center
                md:justify-center ${className}`}>
            <div
                className='max-w-md mb-8 md:mb-0 md:mr-12 lg:mr-40'>
                <article
                    className='text-7xl md:text-8xl font-bold mb-8'>
                    <div
                        className='flex items-center'>
                        <p className='mr-4 md:mr-8'>{`Let's`}</p>
                        <FaArrowRight
                            className='h-16 w-16 md:h-20 md:w-20' />
                    </div>
                    <p>Connect</p>
                </article>
                <p
                    className='text-lg text-green-600 font-bold md:ml-2'>
                    Shoot me a message if you need any consulting
                    or advice with anything. I will usually be
                    responding to you in a few hours.
                </p>
            </div>
            <div
                className='grid grid-rows-1 grid-cols-4 
                    md:grid-cols-2 md:grid-rows-2 
                    gap-2 md:gap-8'>
                <ConnectBtn
                    icon={(
                        <SiGmail />
                    )} />
                <ConnectBtn
                    icon={(
                        <FaLinkedin />
                    )} />
                <ConnectBtn
                    icon={(
                        <FaTelegram />
                    )} />
                <ConnectBtn
                    icon={(
                        <FaDiscord />
                    )} />
            </div>
        </section>
    )
}

export default Connect;