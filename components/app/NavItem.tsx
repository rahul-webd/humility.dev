import Link from "next/link";

export type NavItemProps = {
    href: string,
    title: string,
    className?: string
}

const NavItem = ({
    href,
    title,
    className
}: NavItemProps) => {

    return (
        <li
            className={className}>
            <Link
                href={href}>
                <a
                    className="font-medium group text-lg">
                    {title}
                    <div
                        className="h-0.5 w-0 group-hover:w-full transition-width
                            duration-300 bg-lime-600"></div>
                </a>
            </Link>
        </li>
    )
}

export default NavItem;