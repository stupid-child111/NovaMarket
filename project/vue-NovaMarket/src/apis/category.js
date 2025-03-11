import req from '@/utils/http'

export function getCategoryAPI(id){
    return req({
        url: '/category',
        params: {
            id
        }
    })
}