import Navigation from '../components/Navigation';
import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Price from '../components/Price';
import News from '../components/News';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Price</h2>
                <Price 
                    price={props.bitcoinData}
                />
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
                <News 
                    news={props.news}
                />
            </div>

            <div className="col-md-4">
                <h2>Upcoming Bitcoin events</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const url = "https://api.coinmarketcap.com/v2/ticker/1/";
    const newsUrl = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-20&sortBy=publishedAt&apiKey=0108dd2c942b4b14959feac20103f85b";

    const priceResponse = await fetch(url);
    const newsResponse = await fetch(newsUrl);

    const price = await priceResponse.json();
    const news = await newsResponse.json();

    console.log(news.articles);

    return {
        bitcoinData: price.data.quotes.USD,
        news: news.articles
    }
}
 
export default Index;