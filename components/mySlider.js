import Link from 'next/link'

import OwlCarousel from "react-owl-carousel";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function MySlider({ sliders }) {
  return (
    <OwlCarousel
      className='owl-theme'
      loop={true}
      items={1}
      center={true}
      responsiveRefreshRate={0}
      autoplay={true}
      autoplayTimeout={7000}
      autoplayHoverPause={true}
      nav={false}
      navText={[
       "<i class='icon-arrow-prev'></i>",
       "<i class='icon-arrow-next'></i>"
      ]}
      dots={true}
      margin={8}>

      {
        sliders.map((item, i) => (
          <div className="item" key={`slid-${i}`}>
            <Link href={`/details/${item.id}`}>
              <div className="bg-info square-140 responsive rounded" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
            </Link>
          </div>
        ))
      }

    </OwlCarousel>
  );
}
