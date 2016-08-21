const status = ["未完成", "进行中", "已完成"];
var tabData = {
	start: status[0],
	title: [],
	tasks: {}
};

status.forEach((val, i) => {
	var arr = [];
	arr.push({
		content: `这是一个${val}的任务，哈哈哈哈`
	});
	tabData.title.push(val);
	tabData.tasks[i] = arr;
});

export default {
	tabData: tabData
};