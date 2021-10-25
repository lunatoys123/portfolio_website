import sailsProject from "../../Images/sails_Project.png";
import AuditCommissionProject from "../../Images/Audit_Commission_ Inventory.png";
import App from "../../Images/audit_app.jpg";
import graph from "../../Images/comp3047-web-diagram.png";
import QPonMain from "../../Images/Qpon/QPon_main.png";
import QPonSearch from "../../Images/Qpon/QPon_Search.png";
import QPOnMainMember from "../../Images/Qpon/QPon_Main_member.png";
import QPonMainAdmin from "../../Images/Qpon/QPon_Main_admin.png";
import QPonCreate from "../../Images/Qpon/QPon_create.png";
import QPonUpdate from "../../Images/Qpon/QPon_update.png";
import QPonEdit from "../../Images/Qpon/QPon_Edit.png";
import QPonredeemCoupon from "../../Images/Qpon/QPon_redeemcoupon.png";
export const ProjectData = [
  {
    ImageUrl: sailsProject,
    Title: "Comp3047 web Project",
    Introduction:
      "Simulate a coupon system, using sail.js to compute the front end Interface and function (sign in, search coupon, create coupon, update coupon etc) and backend",
    Component: [
      {
        eventKey: "Component",
        Table: {
          Images: [graph],
          Header: ["Component", "Details"],
          component: [
            {
              Component: "Model",
              Details: [
                "Model use to handle the database data with the ability to create record, update record, delete record and search record",
                "User database contains user information including username, password, role, balance etc",
                "Restaurant database contains coupon information including coupon title, restaurant url, restaurant name, Restaurant Region, coupon price, restaurant mall location, restaurant details",
              ],
            },
            {
              Component: "Controller",
              Details: [
                "Controller responsible for handling logic of the web app. It sends request to Model to receive data and send response to the view to display the response data.",
                "User controller responsible for handling user actions. for example, login, redeem coupon and logout",
                "Restaurant Controller responsible for handling actions when user interact with the coupon in the coupon system. for example, Create coupon, update coupon, show coupon, searching coupon, delete coupon, add coupon to user, show the users who purchase the coupon etc.",
              ],
            },
            {
              Component: "View",
              Details: [
                "View use to handle to the display of the webpage, View can display the response data where Controller pass in.",
              ],
            },
          ],
        },
      },
    ],
    PageIntroduction: [
      {
        eventKey: "PageIntroduction",
        Table: {
          Images: [
            QPonMain,
            QPonSearch,
            QPOnMainMember,
            QPonMainAdmin,
            QPonCreate,
            QPonUpdate,
            QPonEdit,
            QPonredeemCoupon,
          ],
          Header: ["Description"],
          component: [
            {
              Description:
                "This Page will display The Top two expensive coupon on each region," +
                " click the hyper name of the restaurant can get the details of the coupon.",
            },
            {
              Description:
                "The Top navbar provide functions according to user authority. user can only search, sign in and sign out. " +
                "member can search, sign in , sign out and review the redeemed coupon. " +
                "admin can process the function of the user. also, admin can add, update, delete coupon in the system",
            },
            {
              Description:
                "The Searching Page contains a searching form with criteria of Region, range of coins, date. and the searching result in card form.",
            },
            {
              Description:
                "The filter result will show with pagination, each page contains 2 coupons",
            },
            {
              Description:
                "If user is an admin, admin can fill up all the field on create page to add an coupon to the system for other member to buy.",
            },
            {
              Description:
                "Admin can update the coupon and review the member of redeemed coupon in admin tab.",
            },
            {
              Description:
                "If Admin use to update a coupon, the corresponding data will display in the corrsponding field." +
                "admin can update the coupon by changing the value of each field and press 'submit' button or delete the coupon by pressing 'delete' button",
            },
          ],
        },
      },
    ],
  },
  {
    ImageUrl: AuditCommissionProject,
    Title: "Audit Commission Inventory",
    Introduction:
      "create Inventory System to keep track of users electronic equipment using Mysql(Database), php (backend), html, vue.js as front end",
  },
  {
    ImageUrl: App,
    Title: "Audit Commission Inventory App",
    Introduction:
      "create Inventory System to keep track of users electronic equipment using Mysql(Database), php (backend), html, vue.js as front end",
  },
];
