import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    alias: "/dept",
    name: "dept",
    component: () => import("@/components/dept/DeptList")
  },
  // 부서 라우팅
  {
    path: "/dept/:dno",
    name: "dept-details",
    component: () => import("@/components/dept/DeptDetail")
  },
  {
    path: "/add/dept",
    name: "add-dept",
    component: () => import("@/components/dept/AddDept")
  },  
  // 사원 라우팅
  {
    path: "/emp",
    name: "emp",
    component: () => import("@/components/emp/EmpList")
  },
  {
    path: "/emp/:eno",
    name: "emp-details",
    component: () => import("@/components/emp/EmpDetail")
  },
  {
    path: "/add/emp",
    name: "add-emp",
    component: () => import("@/components/emp/AddEmp")
  }, 
  // faq 라우팅
  {
    path: "/faq",
    name: "faq",
    component: () => import("@/components/faq/FaqList")
  },
  {
    path: "/faq/:no",
    name: "faq-details",
    component: () => import("@/components/faq/FaqDetail")
  },
  {
    path: "/add/faq",
    name: "add-faq",
    component: () => import("@/components/faq/AddFaq")
  }, 
  // customer 라우팅
  {
    path: "/customer",
    name: "customer",
    component: () => import("@/components/customer/CustomerList")
  },
  {
    path: "/customer/:cid",
    name: "customer-details",
    component: () => import("@/components/customer/CustomerDetail")
  },
  {
    path: "/add/customer",
    name: "add-customer",
    component: () => import("@/components/customer/AddCustomer")
  }, 
  // qna 라우팅
  {
    path: "/qna",
    name: "qna",
    component: () => import("@/components/qna/QnaList")
  },
  {
    path: "/qna/:qno",
    name: "qna-details",
    component: () => import("@/components/qna/QnaDetail")
  },
  {
    path: "/add/qna",
    name: "add-qna",
    component: () => import("@/components/qna/AddQna")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
