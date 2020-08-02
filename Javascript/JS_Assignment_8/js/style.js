var container = document.createElement("div");
container.id = "main-container";
classList(container, "container-wrapper");
boxAppendToWhom(document.body, container);


var content = document.createElement("div");
content.id = "main-header";
boxAppendToWhom(container, content);

var heading = document.createElement("h1");
heading.innerHTML = "My Blog";
classList(heading, "content-head");
boxAppendToWhom(content, heading);

var search = document.createElement("input");
search.id = "main-search";
search.type = "search";
search.placeholder = "Filter posts..."
classList(search, "content-search");
boxAppendToWhom(content, search);

var blogs = document.createElement("div");
blogs.id = "main-content";
classList(blogs, "main-content-body");
boxAppendToWhom(container, blogs);

       


function boxAppendToWhom(val1, val2){
    val1.appendChild(val2);
}

function classList(val1 , val2) {
 val1.classList.add(val2);
}

