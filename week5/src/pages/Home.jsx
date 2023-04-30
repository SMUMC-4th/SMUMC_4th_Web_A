import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import MapButton from '../components/MapButton';
import Footer from '../components/Footer';
import AccommodationList from '../components/AccommodationList';
import { accommodation } from '../accommodationData';


export default function Home() {


    return (
        <div>
            <Header />
            <CategoryBar />
            <div className="accommodation-wrap" 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    zIndex: '-1',
                    margin: '0 80px',
                    marginBottom: '80px',
                    paddingTop: '160px'
                }}>   
                {
                    accommodation.map((item) => {
                        return (
                        <AccommodationList
                            img_url={item.img_url}
                            location={item.location}
                            distance={item.distance}
                            date={item.date}
                            price={item.price}
                        />
                        )
                    })
                }
            </div>
            <MapButton />
            <Footer />
        </div>
    );
}