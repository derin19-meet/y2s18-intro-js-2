// Create your 'me' object literal here!


var me={
	firstName:"derin",
	lastName:"dovek",
	favoriteFoods: ["grapes" , "sushi"],
	age: 17,
	picture:"https://www.google.com/search?q=dogs&client=ubuntu&hs=K9q&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi6q_6D0cvcAhWEJlAKHRSEBMcQ_AUICigB&biw=1156&bih=553#imgrc=vXX1i3KCrzmURM:"	
}

var me_json = JSON.stringify(me)
document.write(me_json)