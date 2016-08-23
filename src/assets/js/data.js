import Util from "./util.js";

const status = ["未完成", "进行中", "已完成"],
	handles = [
		{
			start: "开始",
			del: "删除"
		}, {
			finish: "完成",
			del: "删除"
		}
	];

var tabData = {
	start: status[0],
	title: [],
	tasks: {}
};

status.forEach((val, i) => {
	tabData.title.push(val);
});
// localStorage.clear();

tabData.tasks = Util.read();

for (let key in tabData.tasks) {
	tabData.tasks[key].handles = handles[key];
}

tabData.pushTask = function (data) {
	var status = data.status,
		id = +new Date();
	if (typeof tabData.tasks[status][0] === "string") {
		tabData.tasks[status] = {}; 
	}
	tabData.tasks[status][id] = data;
	tabData.tasks[status].handles = handles[status];
	Util.add(data);
	return true;
};

export default {
	tabData: tabData
};