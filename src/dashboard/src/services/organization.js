import { stringify } from 'qs';
import request from '@/utils/request';

export async function listOrganization(params) {
  return request(`/api/organizations?${stringify(params)}`);
}

export async function createOrganization(params) {
  return request('/api/organizations', {
    method: 'POST',
    data: params,
  });
}

export async function updateOrganization(params) {
  return request(`/api/organizations/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}

export async function deleteOrganization(id) {
  return request(`/api/organizations/${id}`, {
    method: 'DELETE',
  });
}
