
import Link from "next/link";

export default function header(){
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/term-conditions">New Page</Link>
            </li>
        </ul>
    )
}