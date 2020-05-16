// 原始 list 如下
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];


const _convert = (list, id = 0, link = 'parentId') => {
  const res = []
  // 定义所有数据的map
  const map = list.reduce((total, cur) => {
    cur.children = []
    total[cur.id] = cur
    return total
  }, {})
  for (let v of list) {
    if (v[link] === id) {
      res.push(v)
      continue
    }
    let a = map[v[link]]
    if (a) a.children.push(v)
  }
  return res
}

const __convert = list => {
  let map = new Map();
  let result = []
  list.forEach(el => {
    map.set(el.id, el);
  });
  list.forEach(el => {
		let parent = map.get(el.parentId);
		if (!parent) {
			// parentId === 0
			el.children = []
			return
		}
    if (parent.hasOwnProperty('children')) {
      parent.children.push(el);
    } else {
      parent['children'] = [];
      parent.children.push(el);
    }
	});
	for (let i = 0; i < list.length; i++) {
		const el = list[i];
		if (el.parentId === 0) {
			result.push(el)
		}
	}
	return result
};

function convert(list) {
  const obj = {}
  const res = []
  list.forEach(item => {
    obj[item.id] = item
  })
  list.forEach(item => {
    if (item.parentId !== 0) {
      obj[item.parentId]['children'] ? obj[item.parentId]['children'].push(item) : obj[item.parentId]['children'] = [item]
    } else {
      res.push(item)
    }
  })
  return res
}

const nest = convert(list);

console.log('nest',nest)