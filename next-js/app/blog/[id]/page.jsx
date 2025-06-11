export async function generateMetadata({ params }) {

    const { id } = await params

    const title = `Post with id = ${id}`
    const description = `Post description with id = ${id}`

    return {
        title,
        description,
        other: {
            'og:title': title,
            'og:description': description
        }
    }
}

const Post = async ({ params }) => {

    const { id } = await params

    return (
        <>
            <div>Post</div>
            <span>{id}</span>
        </>
    )
}

export default Post