const Article = ({ data }) => {
    const { urlToImage, url, title, description, source } = data;

    let image = '';

    if(urlToImage !== '' && urlToImage !== 'null') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />;
    } else {
        image = <p className="text-center my-5">No image to show</p>
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>

                <div className="card-body">
                    <h4 className="card-title">
                        {title}
                    </h4>
                </div>
            </div>
            <h4>Article</h4>
        </div>
    );
}
 
export default Article;