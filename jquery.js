$(document).ready(function(){
    let list=$('#list');
    let input=$('#inp');

    let button=$('#btn');
    let li1 = $('');
    let li2 = $('');
    let li3 = $('');
	let text1 = $('');
    let span1 = $('');
    let text2 = $('');
    let span2 = $('');
    let text3 = $('');
	let span3 = $('');
    let data =$('');
    let value = $('');


    var createNode=function(data){
		
		var t1 = Object.keys(data)[0];
        var v1 = data[t1];
        var t2 = Object.keys(data)[1];
        var v2 = data[t2];
        var t3 = Object.keys(data)[2];
        var v3 = data[t3];
		li1=document.createElement('li');
		span1=document.createElement('span');
        text1=document.createTextNode(t1 + " : " + v1);
        li2=document.createElement('li');
		span2=document.createElement('span');
        text2=document.createTextNode(t2 + " : " + v2);
        li3=document.createElement('li');
		span3=document.createElement('span');
		text3=document.createTextNode(t3 + " : " + v3);
	}

	var appendNode=function(){
		span1.append(text1);
		li1.append(span1);
        list.append(li1);
        span2.append(text2);
		li2.append(span2);
        list.append(li2);
        span3.append(text3);
		li3.append(span3);
		list.append(li3);
    }
    
    function network(value){
        
        $.getJSON({
            url:`https://api.genderize.io/?name=${value}`,
            method: 'get',
			success: function(data){
                createNode(data);
                appendNode();
			}
        })
    }

    $("#btn").click(function(){
		$("ul").empty();
        value=$(inp).val();
    
		network(value);
	});
})