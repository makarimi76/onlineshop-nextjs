import Head from 'components/Head'
import ShopLayout from 'layouts/Shop.layout'

import { getCategories } from 'api/categories'

export default function Home({ categories }) {
  console.log(categories)
  return (
    <>
      <Head title="صفحه اصلی" />
      <ShopLayout>

      </ShopLayout>
    </>
  )
}

export async function getStaticProps() {
  const categories = await getCategories()

  return {
    props: { categories },
    revalidate: 1,
  }
}