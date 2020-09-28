function getAllEmps(){
    //call the WEB API usinh JQuery AJAX
    $.ajax({
        type: "GET",
        url: "http://localhost:51792/api/EmpService",
        contentType: "application/json",
        success: function (data) {
            //alert(response);

            var str = "<table border=1 width=60%>";
            str += "<tr><th>EmpCode</th><th>EmpName</th><th>Salary</th><th>Deptid</th></tr>";
            for (var i = 0; i < data.length; i++) {
                str += "<tr>";
                str += "<td>" + data[i].ecode + "</td>";
                str += "<td>" + data[i].ename + "</td>";
                str += "<td>" + data[i].salary + "</td>";
                str += "<td>" + data[i].deptid + "</td>";
                str += "</tr>";
            }
            str += "</table>";

            $("#d1").html(str);
        },
        error: function (errResponse) {
            $("#lblMsg").text("some error");
        }
    });

}

function getEmpById() {
    var id = $("#txtEcode").val();

    //call the WEB API usinh JQuery AJAX
    $.ajax({
        type: "GET",
        url: "http://localhost:51792/api/EmpService/"+id,
        contentType: "application/json",
        success: function (data) {
            //alert(response);

            var str = "<table border=1 width=60%>";
            str += "<tr><th>EmpCode</th><th>EmpName</th><th>Salary</th><th>Deptid</th></tr>";

            str += "<tr>";
            str += "<td>" + data.ecode + "</td>";
            str += "<td>" + data.ename + "</td>";
            str += "<td>" + data.salary + "</td>";
            str += "<td>" + data.deptid + "</td>";
            str += "</tr>";

            str += "</table>";

            $("#d1").html(str);
        },
        error: function (errResponse) {
            $("#lblMsg").text("some error");
        }
    });
}

function deleteEmpById() {
    var id = $("#txtEcode").val();

    //call the WEB API usinh JQuery AJAX
    $.ajax({
        type: "DELETE",
        url: "http://localhost:51792/api/EmpService/" + id,      
        success: function (data) {
            $("#lblMsg").text("Record deleted successfully");
            getAllEmps();            
        },
        error: function (errResponse) {
            $("#lblMsg").text("some error");
        }
    });

}

function addEmployee() {

    //take input for insert from user
    var ec = $("#txtEcode").val();
    var en = $("#txtEname").val();
    var sal = $("#txtSalary").val();
    var did = $("#txtDid").val();

    var empObj = { "ecode": ec, "ename": en, "salary": sal, "deptid": did };

    
    $.ajax({
        type: "POST",
        url: "http://localhost:51792/api/EmpService",
        dataType: "json",
        data: empObj,
        success: function () {
            $("#lblMsg").text("Record inserted");
            getAllEmps();
        },
        error: function (err) {
            $("#lblMsg").text("some error");
        }
    });
    

}

function updateEmp() {
    //take input for insert from user
    var ec = $("#txtEcode").val();
    var en = $("#txtEname").val();
    var sal = $("#txtSalary").val();
    var did = $("#txtDid").val();

    var empObj = { "ecode": ec, "ename": en, "salary": sal, "deptid": did };

    $.ajax({
        type: "PUT",
        url: "http://localhost:51792/api/EmpService/"+ec,
        dataType: "json",
        data: empObj,
        success: function () {
            $("#lblMsg").text("Record updated");
            getAllEmps();
        },
        error: function (err) {
            $("#lblMsg").text("some error");
        }
    });

}