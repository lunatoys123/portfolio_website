import sailsProject from "../../Images/sails_Project.png";
import AuditCommissionProject from "../../Images/Audit_Commission_ Inventory.png";
import App from "../../Images/audit_app.jpg";
import graph from "../../Images/comp3047-web-diagram.png";
export const ProjectData = [
  {
    ImageUrl: sailsProject,
    Title: "Comp3047 web Project",
    Introduction:
      "Simulate a coupon system, using sail.js to compute the front end Interface and function (sign in, search coupon, create coupon, update coupon etc) and backend",
    Component: [
      {
        eventKey: "Component",
        Table: [
          {
            Header: ["Component", "Details"],
            Images:[graph],
            component: [
              {
                Title: "Model",
                Details: [
                  "Model use to handle the database data with the ability to create record, update record, delete record and search record",
                  "User database contains user information including username, password, role, balance etc",
                  "Restaurant database contains coupon information including coupon title, restaurant url, restaurant name, Restaurant Region, coupon price, restaurant mall location, restaurant details",
                ],
              },
              {
                Title: "Controller",
                Details: [
                  "Controller responsible for handling logic of the web app. It sends request to Model to receive data and send response to the view to display the response data.",
                  "User controller responsible for handling user actions. for example, login, redeem coupon and logout",
                  "Restaurant Controller responsible for handling actions when user interact with the coupon in the coupon system. for example, Create coupon, update coupon, show coupon, searching coupon, delete coupon, add coupon to user, show the users who purchase the coupon etc.",
                ],
              },
              {
                Title:"View",
                Details:["View use to handle to the display of the webpage, View can display the response data where Controller pass in."]
              }
            ],
          },
        ],
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
