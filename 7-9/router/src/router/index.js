import homeVue from "@/view/homeVue";
import myVue from "@/view/myVue";
import orderVue from "@/view/orderVue";
import torVue from "@/view/torVue";
import myOne from "@/view/Second/myOne";
import myTwo from "@/view/Second/myTwo";
import myThree from "@/view/Second/myThree";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: homeVue },
  {
    path: "/my",
    component: myVue,
    children: [
      { path: "myOne", component: myOne },
      { path: "myTwo", component: myTwo },
      { path: "myThree", component: myThree },
    ],
  },
  { path: "/order", component: orderVue },
  { path: "/tor", component: torVue },
];
export { routes };
