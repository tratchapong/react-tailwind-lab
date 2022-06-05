import Carousel from './Carousel';
import CarouselItem from './CarouselItem';


function App() {


  return (
    <div className="App min-h-screen">
      <Carousel>
        <CarouselItem>
          <img className="my-3 h-full " src="https://picsum.photos/id/100/800/600" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img className="my-3 h-full " src="https://picsum.photos/id/101/800/600" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img className="my-3 h-full " src="https://picsum.photos/id/102/800/600" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img className="my-3 h-full " src="https://picsum.photos/id/103/800/600" alt="" />
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
