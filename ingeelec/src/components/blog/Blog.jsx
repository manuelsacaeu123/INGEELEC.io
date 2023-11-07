import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
    const res = await fetch('http://localhost:4010/posts');
    return res.json();
}

const Blog = async () => {
    const posts = await getPosts();
    return (
        <section className="section" id="blog">
            <div className="container mx-auto">
                <SectionHeader pretitle='Comentarios' title='DE NUESTROS CLIENTES' />

                {/*lista */}

                <PostList posts={posts} />
            </div>
        </section>
    )
}

export default Blog