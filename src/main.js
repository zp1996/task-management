import Vue from "vue";
import App from "./App";
import TimeEntries from "./components/TimeEntries";
import Home from "./components/Home";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// 映射
router.map({
	"/Home": {
		component: Home
	},
	"/time-entries": {
		component: TimeEntries
	}
});

router.redirect({
	"*": "/Home"
});

router.start(App, "#app");
