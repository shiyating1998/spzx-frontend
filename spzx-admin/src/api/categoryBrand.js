import request from '@/utils/request'

const api_name = '/admin/product/categoryBrand'

// 分页列表
export const GetCategoryBrandPageList = (page, limit, searchObj) => {
    return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: searchObj,
    })
}

export const SaveCategoryBrand = categoryBrand => {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: categoryBrand,
    })
}


export const UpdateCategoryBrandById = categoryBrand => {
    return request({
        url: `${api_name}/updateById`,
        method: 'put',
        data: categoryBrand,
    })
}

export const DeleteCategoryBrandById = id => {
    return request({
      url: `${api_name}/deleteById/${id}`,
      method: 'delete',
    })
}

export const FindBrandByCategoryId = categoryId => {
    return request({
      url: `${api_name}/findBrandByCategoryId/${categoryId}`,
      method: 'get',
    })
}