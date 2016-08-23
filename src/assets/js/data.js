import Util from "./util.js";

const status = ["未完成", "进行中", "已完成"];
var tabData = {
	start: status[0],
	title: [],
	tasks: {}
};

status.forEach((val, i) => {
	tabData.title.push(val);
});

tabData.tasks = Util.read();


tabData.pushTask = function (data) {
	if (typeof tabData.tasks[0][0] === "string") {
		tabData.tasks[0] = []; 
	}
	tabData.tasks[0].push(data);
	Util.add(data);
	return true;
};

export default {
	tabData: tabData
};