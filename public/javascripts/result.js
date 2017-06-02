
function student(name, gender, area, grade) {
	this.name = name;
	if (gender == '1') {
		this.gender = "男";
	}else{
		this.gender = "女";
	}
	switch(area){
		case '1':
			this.area = "北區";
			break;
		case '2':
			this.area = "桃區";
			break;
		case '3':
			this.area = "中區";
			break;
		case '4':
			this.area = "南區";
			break;
		case '5':
			this.area = "東區";
			break;
		case '6':
			this.area = "離島地區";
			break;
		case '7':
			this.area = "僑生";
			break;
		case '8':
			this.area = "外籍生";
			break;
	}
	this.grade = grade;
}

var id, name;

id = $("#search_id").text();
name = $("#search_name").text();
$.get("https://script.google.com/macros/s/AKfycbzcF_LGCJOWgWxBDltC4168LWALxpXuVsLdXyf34MZ2RixxPA-0/exec", {
	"id": id,
	"name": name
},function(data){
	console.log(data);
	if(data === "您所輸入的資料可能有誤，請再輸入一次" || data === "查無此人或學號")
	{
		console.log("error!!!!");
		alert(data + "\n請重新查詢");
		window.location.href="/";
	}
	var student_list = new Array();
	var k = 0;
	for (var i = 0; i < data.length; i += 7) {
  	student_list[k] = new student( data[i]+data[i+1]+data[i+2]+data[i+3], data[i+4], data[i+5], data[i+6]);
		k += 1;
	}
	for (var i = 0; i < k; i++) {
		$(document).ready(function(){
 			$("<div/>", {
    			"id": "student" + i,
    			"class": "students",
    			"text": student_list[i]["name"]+" "+student_list[i]["gender"]+" "+student_list[i]["area"]+" "+student_list[i]["grade"]
  			}).appendTo("#result");
		});
		console.log("test");
	}
	$('#search').html('');
});