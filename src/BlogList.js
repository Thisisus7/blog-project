import { Link } from "react-router-dom"

const BloGList = ({ blogs, title }) => {  // props: pass data from parent component to this child component
    // const blogs = props.blogs;  change {...} to props => the same effect

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (  // you don't have to use 'blog'
                // must have 'key' to keep track of each item in the DOM as it outputs it, must be unique
                <div className='blog-preview' key={blog.id}>  
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}    
        </div>
    );
}
 
export default BloGList;