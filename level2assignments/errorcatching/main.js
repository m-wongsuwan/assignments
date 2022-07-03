function sumTwoNum (num1, num2) {
    try {
        if(typeof num1 !== 'number' || typeof num2 !== 'number')
        throw "Parameters must be numbers!"
    }
    catch(err) {
        console.log(err)
    }
    return num1 + num2
}


// sumTwoNum("1", "2")

var user = {username: "sam", password: "123abc"};
function login(username, password){
  try{
    if(username !== user.username || password !== user.password)
    throw "Invalid credentials!"
  }
  catch(err){
    console.log(err)
  }
  if (username === user.username && password === user.password)
  console.log("Login successful!")
}

login("sam", "123abc")