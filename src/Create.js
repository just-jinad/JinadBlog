import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("jinad")
    const [isPending, setIspending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();

        const  blogUpload  = {title, body, author}

        setIspending(true)
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(blogUpload)
        }).then(()=>{
            console.log("blog has been added successfully");
            setIspending(false)
            history.push("/")
        })
    }
    return (  
        <div className="create">
        <h2>Welcome to a new blog </h2>

        <form onSubmit={handleSubmit}>
            <label > Blog Title:</label>
            <input 
            required
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />

          

             <label > Blog Body:</label>
            <textarea 
            required
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            >

            </textarea>

             <label > Blog Title:</label>
                <select 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="jinad"> jinad</option>
                    <option value="Isaac"> Isaac</option>
                </select>

               {!isPending && <button>Add Blog</button>} 
               {isPending && <button>Adding Blog........</button>} 
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        </form>
        </div>
    );
}
 
export default Create;