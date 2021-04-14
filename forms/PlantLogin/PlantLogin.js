let query = ""
let req = ""
let query2 = ""
let req2 = ""
let netID = "aek25845"
let pw = "Quincy1"
let results = ""
let results2 = ""
let inpID = ""
let inpPw = ""
let inpFN = ""
let inpLN = ""
let inpE = ""
btnLogin.onclick = function() {
    inpID = inptNetID.value
    inpPw = inptPassword.value
    query = "SELECT password FROM user WHERE username ='" + inpID + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa6&query=" + query);
    if (req.status == 200) { //everything worked.
      results = JSON.parse(req.responseText)
      if (results.length == 0) {
        lblResult.value = "Incorrect username or password. Try again or make a new account."
      } else {
        for (i = 0; i < results.length; i++)
          if (inpPw == results[i]) {
            ChangeForm(HomePage)
          } else {
            lblResult.value = "Incorrect username or password. Try again or make a new account."
          }
      }
      }


    }

    btnCreateAccount.onclick = function() {
      ChangeForm(createUser)
    }