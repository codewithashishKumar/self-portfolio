import "../styles/blogs.css";
import React, { useState } from "react";

const blogData = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    category: ["Tech", "Design", "Startup"][i % 3],
    title: `Blog Post Title ${i + 1}`,
    description:
        "This is a short description of the blog post. It gives users a preview of the content.",
    image: `https://picsum.photos/600/400?random=${i + 1}`,
}));

const ITEMS_PER_PAGE = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = blogData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="blogsHeader">
                <h3 className="blog-titleHeader">The Blogs page consists of dummy data for now</h3>
                <p className="blog-titleDesc">This is to showcase how the blogs page would look like and soon read more button functionality be applied with real data as work in progress</p>
            </div>
            <div className="blog-wrapper">
                <div key={currentPage} className="blog-container fade-animation">
                    {currentItems.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <div className="blog-image">
                                <img src={blog.image} alt={blog.title} />
                            </div>

                            <div className="blog-content">
                                <span className="blog-category">{blog.category}</span>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-description">{blog.description}</p>
                                <button className="blog-btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button
                        className="arrow-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="arrow-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>

            </div>
        </>

    );
};

export default Blog;
