import Starter from "../views/starter/starter.jsx";
// ui components
import Alerts from "../views/ui-components/alert.jsx";
import Badges from "../views/ui-components/badge.jsx";
import Buttons from "../views/ui-components/button.jsx";
import Cards from "../views/ui-components/cards.jsx";
import LayoutComponent from "../views/ui-components/layout.jsx";
import PaginationComponent from "../views/ui-components/pagination.jsx";
import PopoverComponent from "../views/ui-components/popover.jsx";
import TooltipComponent from "../views/ui-components/tooltip.jsx";

var ThemeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "far fa-clock",
    component: Starter,
  },
  {
    path: "/alert",
    name: "Alerts",
    icon: "fas fa-comment-alt",
    component: Alerts,
  },
  {
    path: "/badge",
    name: "Badges",
    icon: "fas fa-clone",
    component: Badges,
  },
  {
    path: "/button",
    name: "Buttons",
    icon: "fas fa-inbox",
    component: Buttons,
  },
  {
    path: "/card",
    name: "Cards",
    icon: "far fa-credit-card",
    component: Cards,
  },
  {
    path: "/grid",
    name: "Grid",
    icon: "fas fa-th",
    component: LayoutComponent,
  },
  {
    path: "/pagination",
    name: "Pagination",
    icon: "fas fa-undo",
    component: PaginationComponent,
  },
  {
    path: "/popover",
    name: "Popover",
    icon: "fas fa-sun",
    component: PopoverComponent,
  },
  {
    path: "/ui-components/tooltip",
    name: "Toltips",
    icon: "fas fa-tachometer-alt",
    component: TooltipComponent,
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;
