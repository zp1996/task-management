import Util from "./util.js";
import Vue from "vue";

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

tabData.tasks = Util.read();

for (let key in tabData.tasks) {
	tabData.tasks[key].handles = handles[key];
}

tabData.pushTask = function (data) {
	var status = data.status,
		id = +new Date();
	if (Array.isArray(tabData.tasks[status]['data'])) {
		tabData.tasks[status]['data'] = Object.create(null); 
	}
	tabData.tasks[status]['data'][id] = data;
	Util.add(data, id);
	return true;
};
tabData.delTask = function (id) {
	var data = Util.get(id),
		status = data.status;
	Vue.delete(tabData.tasks[status]['data'], id);
	Util.del(id);
};

export default {
	tabData: tabData
};