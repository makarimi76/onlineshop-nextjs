import Head from 'next/head'

export default function CustomHead({ title, description, keywords }) {
    return (
        <Head>
            <title>{title} | فروشگاه آنلاین</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
    )
}

CustomHead.defaultProps = {
    title: 'فروشگاه آنلاین',
    description: 'فروشگاه آنلاین با نکست جی اس',
    keywords: 'online, shop, nextjs',
}