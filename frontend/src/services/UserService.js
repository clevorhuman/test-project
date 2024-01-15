import http from "../utils/http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByEmail = email => {
  return http.get(`/users?email=${email}`);
};

const login = (data) => {
  return http.post("/users/login", data);
}

const signup = (data) => {
  return http.post("/users", data);
}

const googleAuth = (data) => {
  return  http.post("/users/googlelogin", data);
}

const userservice = {
  getAll,
  get,
  update,
  remove,
  removeAll,
  findByEmail,
  login,
  signup,
  googleAuth
};

export default userservice;