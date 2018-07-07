import Vue from 'vue'
import Router from 'vue-router'
import MyReview from '../components/MyReview'
import MyReviewDetails from  '../components/MyReviewDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyReview',
      component: MyReview
    },
    {
      path:'/MyReviewDetails',
      name:'MyReviewDetails',
      component:MyReviewDetails
    }
  ]
})
