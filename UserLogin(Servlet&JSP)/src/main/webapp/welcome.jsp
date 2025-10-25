<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
</head>
<body>
    
    <%
        String username = (String) session.getAttribute("username");
        if (username == null) {
            response.sendRedirect("index.html");
        } else {
            out.println("<h2>Welcome, " + username + "!</h2>");
        }
    %>
    
    <br>
    <a href="logout">Logout</a>

</body>
</html>