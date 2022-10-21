const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash")
const ejs = require("ejs")
const app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))


/*
{ title: "day 1", postText: "Candidates who wish to be considered against vacancies reserved or seek age-relaxation must submit requisite certificate from the competent authority, in the prescribed format, whenever such certificates are sought by concerned Regional/ Sub-Regional Offices at the time of Document Verification. Otherwise, their claim for SC/ ST/ OBC/ EWS/ PwD/ ESM, etc will not be entertained and their candidature/ applications will be considered under Unreserved (UR) category. The formats of the certificates are annexed with the Notice of Examination. The certificate of disability issued under the Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995 (1 of 1996) will also be valid. Certificates in any other format are liable to be rejected." }, {
    title: "day 2",
    postText: `  Please read the instructions given in the Notice of Examination carefully before filling up the online 'Registration Form' and Application 
    Before proceeding with One-Time Registration, keep the following information/ documents ready" `
}, {
    title: "day 3",
    postText: ` You can use the DatabaseClient.eval and DatabaseClient.invoke operations to evaluate arbitrary
    code on MarkLogic Server. These operations require special privileges instead of (or in addition
    to) the normal REST API roles like rest-reader and rest-writer.
    For details, see “Required Privileges” on page 250. Please read the instructions given in the Notice of Examination carefully before fillin`
} */
//array for post
const posts = [{ title: "one", postText: "this is one" }];


const startinghome = "this is home page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Ipsum"


const startingcontact = "this is contact page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "


const startingabout = "this is about page Lorem Ipsum is simply dummy text of the printing and typesetting industry adding versions of Lorem Ipsum"

app.get("/", (req, res) => {
    res.render("home", {
        title: "HomePage",
        para: startinghome,
        posts: posts

    })
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
        para: startingcontact,
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        para: startingabout
    })
})
app.get("/compose", (req, res) => {
    res.render("compose", {

    })
})

app.get("/posts", (req, res) => {
    res.render("posts", {
        title: "posts",
        para: "something"
    })
})







app.post("/compose", (req, res) => {
    const inputTitle = req.body.inputTitle;
    const inputPost = req.body.inputPost;

    //console.log(inputTitle + " " + inputPost);

    console.log(inputTitle.length > 0)
    console.log(inputPost.length)

    if (inputTitle.length <= 0) {
        console.log("no text")
        res.redirect("/")

    } else {

        const postBody = {
            title: " ",
            postText: " "
        };
        postBody.title = inputTitle;
        postBody.postText = inputPost;

        posts.push(postBody)
            //console.log(posts)


        res.redirect("/")
    }


})

app.get("/posts:postName", (req, res) => {




    let requesttitle = lodash.lowerCase(req.params.postName)








    posts.forEach((post) => {

        const storedtitle = lodash.lowerCase(post.title);
        if (storedtitle === requesttitle) {
            console.log("match Found");


            res.render("posts", {
                title: post.title,
                para: post.postText
            });



        }


    })


})





app.listen(3000, () => {
    console.log("server is running")
})


//github