import Image from "next/image"
import Link from "next/link";
export default function Blog(){
    const blogs = [{title:"laravel", dsc:"laravel details"}, {title:"java", dsc:"java description"}];
    return (
        <div>
            <h3>BLogs</h3>
            <ul>
            {
            blogs.map(blog =>  (
                <div key={blog.title}>
                    <Link href={"blog/"+blog.title} key={blog.title}>{blog.title}</Link>
                    <p> {blog.dsc}</p>
                </div>
                
            )
            )}
            </ul>
            
        </div>
    );
}

