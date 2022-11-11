import http from '../http-common'

class CustomerDataService {

    getAll(searchSelect, searchKeyword, page, size) {
        return http.get(`/qna?searchSelect=${searchSelect}&searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
      }
    
      get(qno) {
        return http.get(`/qna/${qno}`);
      }
    
      create(data) {
        return http.post("/qna", data);
      }
    
      update(qno, data) {
        return http.put(`/qna/${qno}`, data);
      }
    
      delete(qno) {
        return http.delete(`/qna/deletion/${qno}`);
      }
    
      deleteAll() {
        return http.delete(`/qna/all`);
      }
}

export default new CustomerDataService()
