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

		for (let key in type) 
			res[key] = [];

		if (allData) {
			allData.forEach(val => {
				if (type.hasOwnProperty(val.status))
					res[val.status].push(val);
			});
		}

		for (let key in res) {
			if (res[key].length === 0)
				res[key].push(str);
		}

		return res;
	},
	add: (data) => {
		var allData = JSON.parse(localStorage.getItem(today));
		if (allData)
			allData.push(data);
		else
			allData = [data];
		localStorage.setItem(today, JSON.stringify(allData));
		return true;
	}
}