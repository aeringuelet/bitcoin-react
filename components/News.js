import Article from "./Article"

const News = ({ news }) => {
    return (
        <div className="row">
            {news.map(article => (
                <Article 
                    key={article.url}
                    data={article} />
            ))}
        </div>
    );
}
 
export default News;