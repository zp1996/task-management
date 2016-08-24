const status = {
	"0": true,   // 未完成
	"1": true,    // 进行中
	"2": true			// 已完成
};
const date = new Date(),
	today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
	str = "暂时无该类型数据";

export default {
	read: (key, type) => {
		key = key || today;
		type = type || status;
		const allData = JSON.parse(localStorage.getItem(key));
		var res = {};
		for (let key in type) {
			res[key] = {
				data: Object.create(null)
			};
		}
		if (allData) {
			for (let key in allData) {
				let status = allData[key].status;
				if (type.hasOwnProperty(status))
					res[status]['data'][key] = allData[key];
			}
		}
		for (let key in res) {
			if (Object.keys(res[key].data).length === 0)
				res[key]['data'] = [str];
		}
		return res;
	},
	add: (data, id) => {
		var allData = JSON.parse(localStorage.getItem(today));		
		allData = allData || Object.create(null);
		allData[id] = data;
		console.log(allData);
		localStorage.setItem(today, JSON.stringify(allData));
		return true;
	},
	del: (id) => {
		var allData = JSON.parse(localStorage.getItem(today));
		delete allData[id];
		localStorage.setItem(today, JSON.stringify(allData));			
	},
	get: (id) => {
		return JSON.parse(localStorage.getItem(today))[id];
	}
}