const contentDiv = document.getElementById("content")
const createBlogButton = document.getElementById("create-blog")
// const submitButton  = document.getElementById("submit-blog")

//Create form for the blog
const createBlogHandler = async (event) => {
    const form = document.createElement("form")
    const titleLabel = document.createElement("label")
    const titleInput = document.createElement("input")
    const contentLabel = document.createElement("label")
    const contentInput = document.createElement("input")
    const submitButton = document.createElement("button")
   

    submitButton.id = "submit-blog"
    submitButton.type = "submit"
    titleInput.id = "title"
    contentInput.id = "content-area"
    titleLabel.textContent = "Enter your blog title"
    contentLabel.textContent = "Enter your blog content"
    submitButton.textContent = "Submit"
    form.append(titleLabel, titleInput, contentLabel, contentInput, submitButton)
    contentDiv.append(form)

    const submitButtonId = document.getElementById("submit-blog")
    //Create Blog post information
    const createBlogForm = async (event) => {
        event.preventDefault();
        console.log("pleaseworknow")

        const title = document.getElementById("title").value
        const content = document.getElementById("content-area").value
        console.log(title,content)

        if (title && content) {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    content
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                console.log('success');


                document.location.replace('/dashboard');

            } else {
                alert(response.statusText);
            }
        }
    }

    // Submit button action
    submitButtonId.addEventListener("click", createBlogForm)
}

// Create blog button action
createBlogButton.addEventListener("click", createBlogHandler)