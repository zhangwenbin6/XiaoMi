;(function () {
	
	const Header = Vue.component("my-header",{		
  	   name:"my-header",
  	   	template:`
		  <div>
         			<div class="my-header-top">
		         	    <img src="img/download11.png">
		         	    <div class="my-header-log">
		         	    <img src="img/avatar.76a75b8f17.png">
		         	    <a href="login.html">登录/注册</a>
		         	    </div>
         	    	</div>      
         </div>
         	    `,
		date(){
			return {		
			}
		},
		methods:{			
		},
	});
	
	const Order = Vue.component("my-order",{		
  	   name:"my-order",
  	   	template:`
		  <div>
         			<div class="my-order">
		         	   <span class="my-order-left">我的订单</span>
		         	    <span class="my-order-right">全部订单</span>		         	   
         	    	</div> 
         	    	<div class="my-order-bottom">
         	    	<div class="my-order-one">
         	    	   <img src="img/download14.png">
         	    	   <p>代付款</p>
         	    	</div>
         	    	
         	        <div class="my-order-two">
         	    	   <img src="img/download13.png">
         	    	   <p>代发货</p>
         	    	</div>
         	    	
         	    	<div class="my-order-three">
         	    	   <img src="img/download10.png">
         	    	   <p>退换修</p>
         	    	</div>
         	    	</div>
         </div>
         	    `,
		date(){
			return {		
			}
		},
		methods:{			
		},
	});
	
	
	
	const Table = Vue.component("my-table",{		
  	   name:"my-table",
  	   	template:`
		  <div>
         			<div class="my-table-one">		         	
		         	   	<img src="img/download1.png">
		         	   	<div class="my-table-font">
		         	   	<span>会员中心</span>
		         	   	<span class="jian">></span>
		         	   	</div>
         	    	</div> 
         	   
         	   <div class="my-table-two">		         	
		         	   	<img src="img/download2.png">
		         	   	<div class="my-table-font">
		         	   	<span>我的优惠</span>
		         	   	<span class="jian">></span>
		         	   	</div>
         	    	</div> 
         	    	
         	    <div class="my-table-three">		         	
		         	   	<img src="img/download3.png">
		         	   	<div class="my-table-font">
		         	   	<span>服务中心</span>
		         	   	<span class="jian">></span>
		         	   	</div>
         	    	</div> 
         	   
         	   <div class="my-table-two">		         	
		         	   	<img src="img/download4.png">
		         	   	<div class="my-table-font">
		         	   	<span>小米之家</span>
		         	   	<span class="jian">></span>
		         	   	</div>
         	    	</div> 
         	    	
         	    	
         	    	
         	    <div class="my-table-three">		         	
		         	   	<img src="img/download5.png">
		         	   	<div class="my-table-font">
		         	   	<span>F码通道</span>
		         	   	<span class="jian2">></span>
		         	   	</div>
         	    </div>
         	    
         	    
         	    
         	    <div class="my-table-three">		         	
		         	   	<img src="img/download12.png">
		         	   	<div class="my-table-font">
		         	   	<span>设置</span>
		         	   	<span class="jian-last">></span>
		         	   	</div>
         	    	</div> 
         	    	
         </div>
         	    `,
		date(){
			return {		
			}
		},
		methods:{			
		},
	});
	
	const Footer = Vue.component("my-footer",{		
  	   name:"my-footer",
  	   	template:`
		  <div class="my-footer">
         		<div class="my-footer-one">
		         	<a href="index.html"><img src="img/download6.png">
		         	<p>首页</p></a>
         	    </div>   
         	    <div class="my-footer-two">
		         	<a href="fenlei.html"><img src="img/download7.png">
		         	<p>分类</p></a>
         	    </div>  
         	    <div class="my-footer-three">
				    <a href="shopping.html"><img src="img/download8.png">
		         	<p>购物车</p></a>
         	    </div>  
         	   <div class="my-footer-four">
				    <a href="my.html"><img src="img/download9.png">
		         	<p>我的</p></a>
         	    </div>  
         </div>
         	    `,
		date(){
			return {		
			}
		},
		methods:{			
		},
	});
	
	
	
	
	
	  
		   var vm = new Vue({
	       	el:"#warp",
	       	//data管理数据
	       	data: function(){
	       		return {       		
	       		}
	       	}, 
              methods:{ 
       		}
       });

	
	
	
	
	
	
	
	
	
})();
