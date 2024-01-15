import http from "../utils/http-common";

const getAll = (pageNum, pageSize, searchKey, filter) => {
  return http.get(`/jobs?pageNum=${pageNum}&pageSize=${pageSize}&searchKey=${searchKey}&filter=${filter}`);
};  

const get = id => {
  return http.get(`/jobs/${id}`);
};

const create = data => {
  return http.post('/jobs', data);
}

const update = (id, data) => {
  return http.put(`/jobs/${id}`, data);
};

const remove = id => {
  return http.delete(`/jobs/${id}`);
};

const removeAll = () => {
  return http.delete(`/jobs`);
};

const jobservice = {
  getAll,
  get,
  update,
  remove,
  create,
  removeAll
};

export default jobservice;