import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogData } from "../data/blogData";
import CustomLoader from "../pages/CustomLoader";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const article = blogData.find(
        (blog) => blog.id === parseInt(id)
    );

    // ✅ Only handle timeout
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [id]);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) return <CustomLoader />;

    if (!article)
        return <p className="loading-text">Blog not found.</p>;

    return (
        <section className="indiBlogsPage">
            <button className="back-btn" onClick={handleGoBack}>
                ← Go Back
            </button>

            <div className="blog-details">
                <span className="blog-category">
                    {article.category}
                </span>

                <h1 className="news-title">{article.title}</h1>

                <p className="blog-rating">
                    ⭐ {article.rating} ({article.ratingCount} reviews)
                </p>

                {article.content
                    .split("\n\n")
                    .filter(para => para.trim() !== "") // ✅ remove empty paragraphs
                    .map((para, i) => {

                        const hasImage = i < article.images.length;

                        if (!hasImage) {
                            return (
                                <div key={i} className="news-full">
                                    <p>{para}</p>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={i}
                                className={`news-row ${i % 2 === 0 ? "" : "reverse"}`}
                            >
                                <div className="news-image">
                                    <img
                                        src={article.images[i]}
                                        alt={`news-${i}`}
                                    />
                                </div>

                                <div className="news-text">
                                    <p>{para}</p>
                                </div>
                            </div>
                        );
                    })}

            </div>

        </section>
    );
};

export default BlogDetails;
