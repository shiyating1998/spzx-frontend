import request from '@/utils/request'


const base_api = '/admin/system/sysRole'
// 角色列表接口
export const GetSysRoleListByPage = (current,limit,queryDto) => {
  return request({
    url: `${base_api}/findByPage/${current}/${limit}`,
    method: 'post',
    data: queryDto,
  })
}



// 添加角色请求方法
export const SaveSysRole = (data) => {
  return request({
    url: `${base_api}/saveSysRole`,
      method: 'post',
      data
  })
}


// 保存修改
export const UpdateSysRole = (data) => {
  return request({
      url: '/admin/system/sysRole/updateSysRole',
      method: 'put',
      data
  })
}


// 删除角色
export const DeleteSysRoleById = (roleId) => {
  return request({
      url: '/admin/system/sysRole/deleteById/' + roleId,
      method: 'delete'
  })
}

// 查询所有的角色数据
export const GetAllRoleList = (userId) => {
  return request({
      url: '/admin/system/sysRole/findAllRoles/' + userId,
      method: 'get'
  })
}

export const GetSysRoleMenuIds = (roleId) => {
  return request({
      url: "/admin/system/sysRoleMenu/findSysRoleMenuByRoleId/"+ roleId,
      method: 'get'
  })
}

export const DoAssignMenuIdToSysRole = (assignMenuDto) => {
  return request({
      url: "/admin/system/sysRoleMenu/doAssign",
      method: 'post',
      data: assignMenuDto
  })
}