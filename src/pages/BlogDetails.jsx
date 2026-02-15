import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CustomLoader from "../pages/CustomLoader";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    const handleGoBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/blog");
        }
    };

    if (loading) return <CustomLoader />;

    if (!article) return <p className="loading-text">Product not found.</p>;

    return (
        <section className="indiBlogsPage">
            <button className="back-btn" onClick={handleGoBack}>
                ← Go Back
            </button>

            <div className="blog-details">
                <span className="blog-category">
                    {article.category}
                </span>

                <h1>{article.title}</h1>

                <img
                    src={article.image}
                    alt={article.title}
                />

                <p className="blog-price">
                    💲 {article.price}
                </p>

                <p>{article.description}</p>

                {article.rating && (
                    <p className="blog-rating">
                        ⭐ {article.rating.rate} ({article.rating.count} reviews)
                    </p>
                )}
            </div>
        </section>
    );
};

export default BlogDetails;
