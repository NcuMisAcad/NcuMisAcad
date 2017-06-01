
function student(name, gender, area, grade) {
	this.name = name;
	this.gender = gender;
	this.area = area;
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
  	student_list[k] = new student( data[i]+data[i+1]+data[i+2], data[i+3], data[i+4], data[i+5]);
		k += 1;
	}
	for (var i = 0; i < k; i++) {
		$(document).ready(function(){
 			$("<div/>", {
    			"id": "student" + i,
    			"class": "students",
    			"text": student_list[i]["name"]
  			}).appendTo("#result");
		});
		console.log("test");
	}
	$('#search').hide();
});