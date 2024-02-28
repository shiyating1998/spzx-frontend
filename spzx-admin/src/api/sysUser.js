import request from '@/utils/request'


const base_api = '/admin/system/sysUser'
// 分页查询
export const GetSysUserListByPage = (pageNum , pageSize , queryDto) => {
    return request({
        url: "/admin/system/sysUser/findByPage/" + pageNum + "/" + pageSize,
        method: 'get',
        params: queryDto
    })
}

// 新增用户的方法
export const SaveSysUser = (data) => {
    return request({
        url: "/admin/system/sysUser/saveSysUser",
        method: "post",
        data
    })
}

// 修改用户数据的方法
export const UpdateSysUser = (sysUser) => {
    return request({
        url: "/admin/system/sysUser/updateSysUser",
        method: "put",
        data: sysUser
    })
}

// 根据id删除用户
export const DeleteSysUserById = (userId) => {
    return request({
        url: "/admin/system/sysUser/deleteById/" + userId,
        method: 'delete'
    })
}

export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: "/admin/system/sysUser/doAssign",
        method: 'post',
        data: assginRoleVo
    })
}