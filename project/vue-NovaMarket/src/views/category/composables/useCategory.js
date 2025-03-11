//封装分类数据业务相关代码
import { getCategoryAPI } from "@/apis/category"
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { onBeforeRouteUpdate } from "vue-router"

export function useCategory() {
    const categoryData = ref({
    })

    //获取路由参数
    const route = useRoute()

    const getCategory = async (id = route.params.id) => {
        // console.log('当前路由参数 id:', id);
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())
    onBeforeRouteUpdate((to) => {
        // console.log('路由变化了');
        getCategory(to.params.id);
    })
    return {
        categoryData
    };
}
