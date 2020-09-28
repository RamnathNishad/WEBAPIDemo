<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ConsumeWebAPI.aspx.cs" Inherits="ConsumeWebAPIUsingJQuery.ConsumeWebAPI" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            font-size: xx-large;
        }
    </style>
    <script src="Scripts/jquery-3.5.1.min.js"></script>
    <script src="Scripts/myscripts.js"></script>
    <script>
        $(document).ready(function () {
            //$("#d1").html("Page loaded");
            getAllEmps();
        });
    </script>

</head>
<body>
    <form id="form1" runat="server">
        <div>
            <strong><span class="auto-style1">Consuming WEB API using JQuery Client</span></strong><br />
        </div>
    </form>
    <table style="width:70%;" border="1">
        <tr>
            <td>Enter ecode :</td>
            <td>
                <input id="txtEcode" type="text" />&nbsp;
                <input id="btnFindById" type="button" value="Find By Id" onclick="getEmpById()" /></td>
        </tr>
        <tr>
            <td>Enter ename :</td>
            <td>
                <input id="txtEname" type="text" /></td>
        </tr>
        <tr>
            <td>Enter salary :</td>
            <td>
                <input id="txtSalary" type="text" /></td>
        </tr>
        <tr>
            <td>Enter deptid :</td>
            <td>
                <input id="txtDid" type="text" /></td>
        </tr>
        <tr>
            <td>
                <input id="btnInsert" type="button" value="Insert" onclick="addEmployee()" />&nbsp;&nbsp;&nbsp;
                <input id="btnDelete" type="button" value="Delete" onclick="deleteEmpById()" />&nbsp;&nbsp;&nbsp;
                <input id="btnUpdate" type="button" value="Update" onclick="updateEmp()" /></td>
            <td><p id="lblMsg" style="color:red"></p></td>
        </tr>
        <tr>
            <td colspan="2">
                <br />
                <div id="d1"></div>
            </td>
        </tr>
    </table>
</body>
</html>
