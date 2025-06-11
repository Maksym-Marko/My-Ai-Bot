import { getPageById } from '@/app/services/pageService'
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
    const { id } = await params
    const pageData = await getPageById(id)

    if (!pageData) {
        notFound()
    }

    const page = pageData?.page

    return (
        <>
            <main className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" dangerouslySetInnerHTML={{ __html: page.content || '' }}></main>
        </>
    )
}
