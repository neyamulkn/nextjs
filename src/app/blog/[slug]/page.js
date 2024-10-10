
export default function BlogDetails({params}){
    const {slug} = params;
    
    return (
        <div>

            <p>This is blog id:{slug} </p>
        </div>
    )
}

export function generateMetadata({params}){
    const {slug} = params;
    return {
        title:slug,
    }
}

