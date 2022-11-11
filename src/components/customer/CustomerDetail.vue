<template>
  <div v-if="currentCustomer">
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" required name="firstName"
             v-model="currentCustomer.firstName">
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" required name="lastName" v-model="currentCustomer.lastName">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" required name="email" v-model="currentCustomer.email">
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" class="form-control" id="phone" required name="phone" v-model="currentCustomer.phone">
    </div>
    <div class="mb-3">
      <button @click="updateCustomer" class="btn btn-primary me-3">Update</button>
      <button @click="deleteCustomer" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import CustomerDataService from "../../services/CustomerDataService";

/* eslint-disable */
export default {
  data() {
    return {
      currentCustomer: null,
      message: ''
    };
  },
  methods: {
    getCustomer(cid) {
      CustomerDataService.get(cid) // spring 요청
        //  성공/실패 모르겠지만
        //  성공하면 then안에 있는것이 실행
        .then(response => {
          this.currentCustomer = response.data;
          console.log(response.data);
        })
        //  실패하면 catch안에 있는것이 실행
        .catch(e => {
          console.log(e);
        });
    },

    updateCustomer() {
      CustomerDataService.update(this.currentCustomer.cid, this.currentCustomer)
        .then(response => {
          console.log(response.data);
          this.message = 'The Customer was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteCustomer() {
      CustomerDataService.delete(this.currentCustomer.cid)
        .then(response => {
          console.log(response.data);
          this.$router.push("/customer");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCustomer(this.$route.params.cid);
  }
};
</script>
