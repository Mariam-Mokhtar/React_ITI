import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './music.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

class Music extends Component {
    constructor() {
        super();
        this.state = {
            artists:[]
        }

    }
    RenderArtists = () => {
        return this.state.artists.map((artist) => {
          console.log(artist);
          return (
            <SwiperSlide key={artist.id}> {/* Added key prop for better performance */}
             <NavLink class="text-decoration-none" to={`/artist/${artist.id}`}>
              <div className="card">
                <div className="card_gallery">
                  <img src={`./images/covers/${artist.cover}.jpg`} alt={artist.name} />
                </div>
                <div className="card_body text-center">
                  <h1 className="card_title">{artist.name}</h1>
                </div>
              </div>
              </NavLink>
            </SwiperSlide>
          );
        });
      };
      
    componentDidMount(){
        fetch("http://localhost:4000/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data)
            this.setState({artists:data});
        })
        .catch((err)=>{console.log(err)});
    }
    render() {
        return (
            <>
        <div class="mx-auto text-center "><h1 class="mt-5 header-name">Artists</h1></div>
            
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {this.RenderArtists()}
                </Swiper>
            </>
        );
    }
}
export default Music;

