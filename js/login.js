;(function () {
 const Header = Vue.component("my-header",{		
  	   name:"my-header",
  	   	template:`
		  <div>
         			<div class="my-header-top">
		         	    <img src="img/timg.jpg">
		         	    <p>小米登录页面</p>
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
         			<div class="my-biao">
		         	    <input type="text" placeholder="手机号" value="+86>"/>
		         	    <input type="text"placeholder="短信验证码"><br/>
		         	    <button type="button">立即注册/登录</button>
		         	 <div class="pwd">
		         	 用户名密码登录
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
	
	
	const Logon = Vue.component("my-logon",{		
  	   name:"my-logon",
  	   	template:`
		  <div>
         			<div class="my-log">
		         	    <p>其他方式登录</p>
		         	    <img src="img/qq.png">
		         	    <img src="img/weixin.png">
		         	    <img src="img/sina.png">
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
	
	
	const Font = Vue.component("my-font",{		
  	   name:"my-font",
  	   	template:`
		  <div>
         			<div class="my-f">
		         	 <span>简体</span>
		         	 <span>|</span>
		         	 <span>繁体</span>
		         	 <span>|</span>
		         	 <span>English</span>
		         	 <span>|</span>
		         	 <span>常见问题</span>
		         	 <span>|</span>
		         	 <span>隐私政策</span>
		         
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
