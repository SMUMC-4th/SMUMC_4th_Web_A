import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import MapButton from '../components/MapButton';
import Footer from '../components/Footer';
import WorldMap from '../components/WorldMap';

export default function Map() {
   

    return (
        <div>
            <Header />
            <CategoryBar />
            <MapButton />
            <WorldMap />
            <Footer />
        </div>
    );
}