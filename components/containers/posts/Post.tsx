export type PostModel = {
    image?: string,
    date: string,
    title: string,
    description: string[]
}

export const Post = ({ image, date, title, description }: PostModel) => {

    return (
        <div>
            {/* <img
                alt={title}
                src={`https:${image}`} /> */}
            <h2>
                {title}
            </h2>
            <h6>
                {date.substring(0, 10)}
            </h6>
            <div>
                {
                    description.map((d, i) => {

                        return (
                            <p
                                key={i}>
                                {d}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}