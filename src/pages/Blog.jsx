import "../styles/blogs.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = blogData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="blogsContainer">
            <div className="blogsHeader">
                <h3 className="blog-titleHeader">
                    Dummy Blog Data
                </h3>
                <p className="blog-titleDesc">
                    Now your blog is powered by static dummy data.
                </p>
            </div>

            <div className="blog-wrapper">
                <div key={currentPage} className="blog-container fade-animation">
                    {currentItems.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <div className="blog-image">
                                <img
                                    src={blog.image}
                                    alt={`Thumbnail for ${blog.title}`}
                                />
                            </div>

                            <div className="blog-content">
                                <span className="blog-category">
                                    {blog.category}
                                </span>

                                <h3 className="blog-title">
                                    {blog.title}
                                </h3>

                                <p className="blog-description">
                                    {blog.description.substring(0, 100)}...
                                </p>

                                <button
                                    className="blog-btn"
                                    onClick={() =>
                                        navigate(`/blog/${blog.id}`, {
                                            state: blog
                                        })
                                    }
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            className="arrow-btn"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ←
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`page-btn ${currentPage === page ? "active" : ""}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
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
                )}
            </div>
        </section>
    );
};

export default Blog;
