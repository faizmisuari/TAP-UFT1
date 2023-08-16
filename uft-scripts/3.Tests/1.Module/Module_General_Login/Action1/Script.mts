Browser("The Internet").Page("Login").Sync
Browser("The Internet").Page("Login").WebEdit("username").Set DataTable("p_Username", dtGlobalSheet)
Browser("The Internet").Page("Login").WebEdit("password").Set DataTable("p_Password", dtGlobalSheet)
Browser("The Internet").Page("Login").WebButton("Login").Click
