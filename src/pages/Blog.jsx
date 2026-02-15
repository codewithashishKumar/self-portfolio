import "../styles/blogs.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../pages/CustomLoader";

const ITEMS_PER_PAGE = 6;

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = blogs.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map((item) => ({
                    id: item.id,
                    category: item.category,
                    title: item.title,
                    description: item.description,
                    image: item.image,
                    content: item.description,
                    rating: item.rating?.rate,
                    ratingCount: item.rating?.count,
                }));

                setBlogs(formattedData);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);


    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const getPaginationRange = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        if (totalPages <= 1) return [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...");
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push("...", totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    if (loading) return <CustomLoader />;

    return (
        <section className="blogsContainer">
            <div className="blogsHeader">
                <h3 className="blog-titleHeader">
                    Real Data from FakeStore API
                </h3>
                <p className="blog-titleDesc">
                    Now your blog is powered by real API data.
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
                                    {blog.description.substring(0, 80)}...
                                </p>

                                <button
                                    className="blog-btn"
                                    onClick={() =>
                                        navigate(`/blog/${blog.id}`)
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

                        {getPaginationRange().map((page, index) =>
                            page === "..." ? (
                                <span key={index} className="dots">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={index}
                                    className={`page-btn ${currentPage === page ? "active" : ""
                                        }`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            )
                        )}

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
