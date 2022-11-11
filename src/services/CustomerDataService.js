import http from '../http-common'

class CustomerDataService {

    getAll(email, page, size) {
        return http.get(`/customer?email=${email}&page=${page}&size=${size}`);
      }
    
      get(cid) {
        return http.get(`/customer/${cid}`);
      }
    
      create(data) {
        return http.post("/customer", data);
      }
    
      update(cid, data) {
        return http.put(`/customer/${cid}`, data);
      }
    
      delete(cid) {
        return http.delete(`/customer/deletion/${cid}`);
      }
    
      deleteAll() {
        return http.delete(`/customer/all`);
      }
}

export default new CustomerDataService()
