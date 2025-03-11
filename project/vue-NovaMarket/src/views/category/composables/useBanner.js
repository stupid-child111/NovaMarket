//封装banner轮播图相关的业务代码
import { ref,onMounted } from "vue";
import { getBannerAPI } from "@/apis/home";
//要啥导入啥
export function useBanner(){
    const bannerList = ref([])
const getBanner = async() => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    bannerList.value = res.result
}

onMounted(() => {
    getBanner()
})

//运用到的组件数据以对象形式return出去
return {
    bannerList
};
}
//自动分号插入机制

