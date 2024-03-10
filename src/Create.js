import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('samaneh');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //we can use different methods on history obj. to go back or forward through history
    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        //store the data in the form to an obj
        const blog = { title, body, author };

        setIsPending(true);

        // make a POST request to the endpoint that we need to add a new blog(json server adds the id property automatically)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"}, //type of the data we are sending
            body: JSON.stringify(blog) //actual data. turn the data from an obj. to a JSON string
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);

            //history.go(-1); //go back one page to where the user were when add the new blog

            //redirect the user back to the home page once the new blog is added
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="samaneh">samaneh</option>
                    <option value="rey">rey</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;