import axios from 'utils/axios'

export const getCategorizedProducts = async (categories, limit) => {
    const categorizedProducts = []
    for (const category of categories) {
        if (category.isShowHome) {
            const res = await axios.get(encodeURI(`/products?categories_like=${category.name}&_limit=${limit}`))
            categorizedProducts.push({ name: category.name, slug: category.slug, data: res.data })
        }
    }

    return categorizedProducts
}