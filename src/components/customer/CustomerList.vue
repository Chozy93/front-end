<template>
  <div>
    <!-- search 관련 div 시작 -->
    <div class="col-md-8">
      <div class="input-group mb-3">
        <!--            Todo : 수정 시작 -->
        <input
          type="text"
          class="form-control"
          placeholder="Search by Email"
          v-model="searchEmail"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="
              page = 1;
              retrieveCustomer();
            "
          >
            Search
          </button>
        </div>
        <!--            Todo : 수정 끝 -->
      </div>
    </div>
    <!-- search 관련 div 끝 -->

    <!--    Todo : page 바 시작 -->
    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <option v-for="size in pageSizes" :key="size" :value="size">
            <!--            size : 3, 6, 9 -->
            {{ size }}
          </option>
        </select>
      </div>

      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <!--    Todo : page 바 끝 -->

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <!-- <th scope="col">Last Name</th> -->
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="(data, index) in customer" :key="index">
        <tr>
          <td>{{ data.lastName + " " + data.firstName }}</td>
          <!-- <td>{{ data.lastName }}</td> -->
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
          <td>
            <router-link :to="'/customer/' + data.cid"
              ><span class="badge bg-success">Edit</span></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CustomerDataService from "../../services/CustomerDataService";

export default {
  data() {
    return {
      customer: [],
      searchEmail: "",

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    retrieveCustomer() {
      CustomerDataService.getAll(this.searchEmail, this.page - 1, this.pageSize)
        .then((response) => {
          const { customer, totalItems } = response.data;
          this.customer = customer;
          this.count = totalItems;

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    //  페이지 번호 변경시 실행되는 함수
    //  부트스트랩-페이지 양식에 페이지번호만 매개변수로 전달하면 됨
    // 페이지번호를 변경한 숫자가 매개변수(value)로 전달됨
    handlePageChange(value) {
      this.page = value;
      this.retrieveCustomer();
    },

    // 셀렉트 박스 값 변경시 (페이지 크기 변경) 실행되는 함수
    // event.target.value : 셀렉트 박스에서 선택된 값
    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveCustomer();
    },
  },
  mounted() {
    this.retrieveCustomer();
  },
};
</script>
