var blog = [
    {
        Id: 1,
        title: "abc defghi jklm nopqrst u v wxyz",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 2,
        title: "hello world hello name fantastic",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 3,
        title: "Happy Coding Happy Assignment Happy Coding",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 4,
        title: "Girls Boys Boys Girls",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    },

    {
        Id: 5,
        title: "Hello People Hello Public Cool Summer",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet consequatur facere quo", 
    }

]



displayBlogsContents();
function displayBlogsContents() {
    var i;
    for (i = 0; i < blog.length; i++) {
    
        var newBlog = document.createElement("div");
        classList(newBlog, "blog-content");
        boxAppendToWhom(blogs, newBlog);

        var blogCircle = document.createElement("div");
        classList(blogCircle, "blog-circle");
        boxAppendToWhom(newBlog, blogCircle);


        var blogTitle =  document.createElement("h2");
        boxAppendToWhom(newBlog, blogTitle);
        classList(blogTitle, "blog-title");
        blogTitle.id = "blogTitle";

        var blogPara =  document.createElement("p");
        blogPara.id = "blogPara";
        classList(blogPara, "blog-para");
        boxAppendToWhom(newBlog, blogPara);
        blogCircle.innerHTML = blog[i].Id;
        blogTitle.innerHTML = blog[i].title;
        blogPara.innerHTML = blog[i].content;

        
    }
}


console.log(blog)

var mySearch = document.getElementById("main-search")
//console.log(mySearch)

mySearch.addEventListener("keyup", function(e) {

    const typeLetter = e.target.value;
    // console.log(e.target.value);
    
    const filteredParagraph = blog.filter( character => {
        return (character.title.includes(typeLetter));
    });
    console.log(filteredParagraph);
    displayBlogsContents(filteredParagraph);

})