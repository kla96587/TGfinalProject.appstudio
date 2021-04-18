btnReturnLogin.onclick = function() {
    inpFN = inpFirstName.value
    inpLN = inpLastName.value
    inpE = inpEmail.value
    inpID = inpNewUser.value
    inpPw = inpNewPassword.value

    query2 = "SELECT username FROM user WHERE username ='" + inpID + "'"
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa6&query=" + query2)
    if (req2.status == 200) { //everything worked.
      results2 = JSON.parse(req2.responseText)
      if (results2.length == 0) {
        query = "INSERT INTO user(first_name, last_name, email, username, password) VALUES('" + inpFN + "', '" + inpLN + "', '" + inpE + "','" + inpID + "', '" + inpPw + "');"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa6&query=" + query)
        ChangeForm(PlantLogin)
      } else
        lblCurrentAccount.value = "Username already exists."
    }
    }