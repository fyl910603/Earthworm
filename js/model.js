$(function(){
    	$('#zulin,#quankuan').click(function(){
    	 	swal({
        	title:'',           
            text: "预计一周内完成安装，如有疑问请随时拨打<strong>400-8676-576</strong>电话咨询",
            showCancelButton: false,
            closeOnConfirm: true,
            confirmButtonText: "OK",
            html:true
            }, function(isConfirm){
            if (isConfirm) {
                location.href="goumai.html"  
            } 
          })       
    });
    $('#qiehuan').click(function(){   	 
    	 	swal({
        	title:'',           
            text: "<p>1.更换后将不能再次更换</p><p>2.更换后押金及使用费用将更改为购买费用,并另行支付余下的款项</p>",
            showCancelButton: false,
            closeOnConfirm: true,
            confirmButtonText: "OK",
            html:true
            }, function(isConfirm){
            if (isConfirm) {
                $('#chongzhi').addClass('qiehuan')
    	 	    $('#tixian').removeClass('qiehuan');
    	        $('#qiehuan').hide()
            } 
          })
    	 	
    });
    $('#next').click(function(){
    	location.href="lajixinxi.html"
    });
    $('#bangding').click(function(){
    	location.href="tianjia.html"
    })
})

        
