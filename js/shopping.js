var vm = new Vue({
	el: '#box',
	data: {
		yuan: 'yuan1',
		yuan1: 'yuan',
		Index: '',
		cpIndex: '',
		allPrice: '0.00',
		allSelect: false,
		Show: -1,
		allNum: 0,
		animated: '',
		flag: false,
		jinggao:false,
		motaitext:"请选择商品",
		
		json: [{
				sj: '小米自营商城',
				select: false,
				show: true,
				items: [{
						animateAn: '',
						animate: '',
						id: 1,
						cp: '铜师傅好运铜葫芦  金色',
						jg: 29,
						sl: 1,
						select: false,
						img: 'img/3317f8a13bd9dd920553a35b862edf8b!360x360.jpg',
						kg: '1020g',
					},
					{
						animateAn: '',
						animate: '',
						id: 2,
						cp:'时怡什锦果肉(罐装1020g)' ,
						jg: 129,
						sl: 1,
						select: false,
						img:  'img/35269bba66d38dd255ca2819b9bf7158.png',
						kg: '0.91'
					}
				]
			},
			{
				sj: '米家数据商店',
				select: false,
				show: true,
				items: [{
						animate: '',
						id: 1,
						cp: '小米8青春版 标准高透贴膜高透',
						jg: 9,
						sl: 1,
						select: false,
						img: "img/pms_1537344382.67756270.jpg",
						kg: '0.91'
					},
					{
						animate: '',
						id: 2,
						cp: '13.3"小米笔记本Air四核i7 8g 256G',
						jg: 5999,
						sl: 1,
						select: false,
						img: 'img/pms_1524636075.71677607.jpg',
						kg: '6.91'
					},
					{
						animate: '',
						id: 3,
						cp: 'USP外接百兆网卡 黑色',
						jg: 39,
						sl: 1,
						select: false,
						img: 'img/T1RZdvBKWT1RXrhCrK.jpg',
						kg: '0.23'
					}
				]
			},
			{
				sj: '米家科技商店',
				select: false,
				show: true,
				items: [{
						animate: '',
						id: 1,
						cp: '小米活塞耳机 清新版 黑色',
						jg: 29,
						sl: 1,
						select: false,
						img: 'img/pms_1482321199.12589253.jpg',
						kg: '1.4'
					},
					{
						animate: '',
						id: 2,
						cp: '小米人体传感器 白色',
						jg: 49,
						sl: 1,
						select: false,
						img: 'img/T1bFJ_B4Jv1RXrhCrK.jpg',
						kg: '0.3'
					},
					{
						animate: '',
						id: 3,
						cp: 'TS尼龙偏光太阳镜 米家定制 灰色',
						jg: 149,
						sl: 1,
						select: false,
						img: 'img/pms_1492999959.43955760.jpg',
						kg: '1.2'
					}
				]
			}
		]
	},
	mounted() {

	},
	methods: {
		//获取店铺id冒泡事件捕获阶段触发
		mp(dpIndex) {
			this.Index = dpIndex;
			// console.log("1---选择的是店铺------"+this.Index);
			//    console.log(e.currentTarget);
		},
		//获取商品id
		selected(cpIndex) {
			if(this.json[this.Index].items[cpIndex].animateAn == 'animated tada') {
				this.json[this.Index].items[cpIndex].animateAn = 'animated';
			} else this.json[this.Index].items[cpIndex].animateAn = 'animated tada';

			var select = this.json[this.Index].items[cpIndex].select;
			this.json[this.Index].items[cpIndex].select = !select;
			this.cpIndex = cpIndex;
			var length = this.json[this.Index].items.length;

			// console.log(length);
			//商品全部选中，店铺才选中
			var select = true;
			for(var i = 0; i < length; i++) {
				//叠加积累有false就为false
				select *= this.json[this.Index].items[i].select;
			}
			if(select == true) {
				this.json[this.Index].select = true;
			} else this.json[this.Index].select = false;
			//判断商品是否全部选中，是的话，全选也选中
			var json = this.json.length;
			var all = true;
			for(var i = 0; i < json; i++) {
				all *= this.json[i].select;
			}
			if(all == true) {
				this.allSelect = true;
			}
			// console.log("2---店铺----"+this.Index+"商品序列---"+cpIndex);	
			// console.log(e.currentTarget);	
			this.allSl(); //商品数量
			this.cancel(); //商品没有全部选中就取消全选
			this.price(); //总价	
			
			
		},
		//结算商品数量
		allSl() {
			var json = this.json.length;
			var js = 0;
			for(var i = 0; i < json; i++) {
				var arr = this.json[i].items;
				for(var j = 0; j < arr.length; j++) {
					js += this.json[i].items[j].select;
				}
			}
			this.allNum = js;
		},
		//计算价格
		price() {
			var all = 0;
			for(var j = 0; j < this.json.length; j++) { //点击循环有多少个商家
				var arr = this.json[j].items; //获取商家下面的列表产品
				for(var i = 0; i < arr.length; i++) { //循环产品列表
					if(arr[i].select === true) { //列表里面那些为true
						all += arr[i].jg * arr[i].sl //为true的价格加起来，为总价
					}
				}
			}
			this.allPrice = all.toFixed(2); //返回数据
		},

		dpSelected(index) {
			//商家选中
			var select = this.json[index].select;
			this.json[index].select = !select;

			var arr = this.json[index].items; //获取店铺下面的产品数量
			for(var i = 0; i < arr.length; i++) { //循环产品数量
				if(arr[i].select == false) { //判断有那些产品未选中
					arr[i].select = true //选中咯
				}
				if(this.json[index].select === false) { //当店铺取消全选的时候
					arr[i].select = false; //产品全部没选中
				}
			}
			var select = true; //创建一个为真的变量
			for(var i = 0; i < this.json.length; i++) {
				if(this.json[i].select == false) { //如果有商家没选中全选则为false
					this.allSelect = false;
				}
				select *= this.json[i].select;
			}
			console.log(select);
			if(select == true) {
				this.allSelect = true;
			}

			this.allSl(); //商品数量
			this.price();
			// console.log(arr.length);
		},
		//全选
		AllSelect() {
			var selected = this.allSelect;
			this.allSelect = !selected;

			var dp = this.json.length; //获取店铺数量
			for(var i = 0; i < dp; i++) { //循环店铺
				var arr = this.json[i].items; //获取每个店铺的商品
				for(var j = 0; j < arr.length; j++) { //循环每个店铺里面的商品为选中					
					if(this.allSelect == true) {
						var select = this.json[i].items[j].select;
						this.json[i].items[j].select = true;

					}
					if(this.allSelect == false) {
						this.json[i].items[j].select = false;
					}
				}
				if(this.allSelect == true) {
					this.json[i].select = true;
				} else {
					this.json[i].select = false;
				}
			}
			this.allSl(); //商品数量
			this.price();
		},
		//商品没有全部选中就取消全选
		cancel() {
			if(this.json[this.Index].items[this.cpIndex].select == false) {
				this.allSelect = false;
			}

		},
		//显示编辑商品
		show(index) {
			this.json[this.Index].items[index].id = index;
			this.json[this.Index].items[index].animate = 'animated bounceInLeft';
			console.log(index);
		},
		Hide(index) {
			this.json[this.Index].items[index].id = -1;
			this.json[this.Index].items[index].animate = 'animated bounceInRight';
		},
		//商品--
		reduce(index) {
			if(this.json[this.Index].items[index].sl <= 1) {
				return;
			}
			this.json[this.Index].items[index].sl--;
			this.price();
		},
		//商品++
		add(index) {
			if(this.json[this.Index].items[index].sl > 999999) {
				return;
			}
			this.json[this.Index].items[index].sl++;
			this.price();
		},
		del(index) {
			this.json[this.Index].items.splice(index, 1);
			if(this.json[this.Index].items.length == 0) {
				this.json[this.Index].show = false;
			}
		},
		handleTrue:function(){
			this.jinggao = !this.jinggao;
			
		},
		handleSure:function(){
			this.flag = !this.flag;
		},
		//结算支付
		js() {
			if(this.allPrice == 0) {
				this.jinggao = !this.jinggao;

			}else{
				this.flag = !this.flag;
                return this.allPrice;
			}
			
		},

	}
})