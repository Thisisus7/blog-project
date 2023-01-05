import { useState } from "react";
import { useHistory } from "react-router-dom";  // go back/forward through the history also add a new page on history  (redirect to a new route)

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Rick');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => { // e: event object
        e.preventDefault();  // by default, if we click 'Add Blog', the page will be refreshed, we prevent it
        const blog = {title, body, author};  // blog object

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',  // a post request to endpoint localhost:8000/blogs
            headers: { "Content-Type": "application/json" },  // sending json data to server\
            body: JSON.stringify(blog)  // object -> JSON string
        }).then( () => {
            console.log('new blog added')
            setIsPending(false);
            // history.go(-1)  // go back 1 step
            history.push('/')  // go to homepage
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>  {/* allows a user to enter data that is sent to a server */}
                <label>Blog title:</label>
                 {/* required an input field must be filled out before submitting the form */}
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />  {/* input: accept data from the user */}
            </form>  
            <form onSubmit={handleSubmit}>
                <label>Blog body:</label>
                {/* textarea: multi-line text input control, often used in a form */}
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>  
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Rick">Rick</option>
                    <option value="Morty">Morty</option>
                    <option value="Sarah">Sarah</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>  
        </div>
      );
}
 
export default Create;