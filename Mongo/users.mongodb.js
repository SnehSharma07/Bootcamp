use("admin")
db.college.find()

//create
db.college.insertOne({
    "name": "Sneh Sharma",
    "rollno": 2301010215,
    "section": "D",
    "email": "snehsharma415@gmail.com"
    
})

db.college.insertMany([
    {
        "name": "Rohit Sharma",
        "rollno": 2301010216,
        "section": "G",
        "email": "rohitsharma416@gmail.com"
    },
    {
        "name": "Priya Patel",
        "rollno": 2301010217,
        "section": "I",
        "email": "priyapatel417@gmail.com"
    }
])
db.college.find()
//db.college.find({"name": "Rohit Sharma"})
