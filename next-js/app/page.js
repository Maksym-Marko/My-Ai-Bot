import { getPageById } from '@/app/services/pageService'
import { notFound } from 'next/navigation'

const HOME_PAGE_SLUG = process.env.HOME_PAGE_SLUG

export async function generateMetadata() {
  const pageData = await getPageById(HOME_PAGE_SLUG)

  if (!pageData) return {}

  const page = pageData.page

  return {
    title: page?.title || 'Default Title',
    description: page?.excerpt || 'Default description',
  }
}

export default async function Home() {
  const pageData = await getPageById(HOME_PAGE_SLUG)

  if (!pageData) {
    notFound()
  }

  const page = pageData?.page

  const title = page?.title
  const excerpt = page?.excerpt

  return (
    <>
      <main className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" dangerouslySetInnerHTML={{ __html: page.content || '' }}></main>
    </>
  )
}

