import { createRouter, createWebHistory } from "vue-router";

import MoneyListDaily from "@/pages/MoneyCalendar/MoneyListDaily.vue";
import MoneyListLatest from "@/pages/MoneyCalendar/MoneyListLatest.vue";
import MoneyItem from "@/pages/MoneyCalendar/MoneyItem.vue";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Options from "@/components/Options.vue";
import Calender from "@/components/Calender.vue";
import BudgetInOptions from "@/pages/BudgetSetting/BudgetInOptions.vue";
import Report from "@/pages/MoneyReport/Report.vue";
import TransactionLogLatest from "@/pages/OptionsMoneyList/TransactionLogLatest.vue";
import TransactionLogList from "@/pages/OptionsMoneyList/TransactionLogList.vue";
import Budget from "@/pages/BudgetSetting/Budget.vue";
import Join from "@/components/Join.vue";
import CalenderTable from "@/components/CalenderTable.vue";
import MoneyList from "@/components/MoneyList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", component: Login, name: "login" },
    { path: "/join", component: Join, name: "join" },
    {
      path: '/home',/* 홈 주소를 보고 Home.vue를 띄움 */
      component: Home,
      name: 'home',
      children: [
        {

          path: "", /* home 접속 시 기본으로 보여줄 자식 */
          components: {
            default: Calender, /* 왼 */
            right: MoneyList   /* 오 */
          },
          children: [ /* 손자들 보여줌 */
            {
              path: "", 
              name: "moneyListLatest",
              components: {
                default: CalenderTable, /* Calender로 */
                right: MoneyListLatest  /* MoneyList로 */
              }
            },
            {
              path: ":selectedDate",
              name: "moneyListDaily", 
              components: {
                default: CalenderTable,
                right: MoneyListDaily
              }
            }
          ],
        }
      ]
    },
    {
      path: "/options",
      component: Options,
      name: "options",
      children: [
        {
          path: "transaction",
          component: TransactionLogLatest,
          name: "options/transaction",
          children: [
            {
              path: "transaction/list",
              component: TransactionLogList,
              name: "loglist",
            },
          ],
        },
        {
          path: "budget-setting",
          component: BudgetInOptions,
          name: 'options/budget-setting',
        },
        { path: "budget", component: Budget, name: "options/budget" },
        {
          path: "moneyreport",
          component: Report,
          name: "options/moneyreport",
        },
      ],
    },

    { path: "/moneyItem/:id", component: MoneyItem, name: "moneyItem" },
  ],
});

export default router;
