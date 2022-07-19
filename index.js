const express = require("express");
const books = require("./database/booksDB.json");
const path = require('path');
const PORT = process.env.PORT || 5000;  
const app = express();
const indexRouter = require("./routes/index");

// CORS
const cors = require("cors");
app.use(cors());


app.use(express.json());// build a process json information
app.use(express.urlencoded({ extended: false }))
// serve static files from the REACT app
app.use(express.static(path.join(__dirname, "client/build")));


app.use("/", indexRouter)

app.get("/home-page_books", (req, res) => {
   res.json([books.combinedPrintAndEBookfiction, books.combinedPrintAndEBookNonfiction]);
});

app.get("/categories", (req,res) => {
    res.json([
        books.youngAdult,
        books.graphicBooksAndManga,
        books.education,
        books.businessBooks,
        books.humor,
        books.science
    ])
})

//this is the "catchcall" handler for any request that doesnt match any of the above
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})


// if(process.env.NODE_ENV === "production"){
//     app.use(express.static('client/build'));
//     app.get('*', (req, res)=> {
//         req.sendFile(path.resolve(path.join(__dirname, "..", "build", "index.html")))
//     })
// }



app.listen(PORT, () => console.log(`server running on ${PORT} `))