import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamPrepView from '../views/ExamPrepView.vue'
import TopicPracticeView from '../views/TopicPracticeView.vue'
import CheckWorkView from '../views/CheckWorkView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exam-prep',
    name: 'exam prep',
    component: ExamPrepView
  },
  {
    path: '/topic-practice',
    name: 'topic practice',
    component: TopicPracticeView
  },
  {
    path: '/check-work',
    name: 'check work',
    component: CheckWorkView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router