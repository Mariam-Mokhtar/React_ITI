import { Component,useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink,useParams } from "react-router-dom";
import { EffectCards, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import './artist-details.css'

// import required modules

let RenderAlbums = (artist) => {
    console.log(artist.albums)
    return artist.albums&&artist.albums.map((album) => {
      return (
        <SwiperSlide key={album.id}>
        <div class="container-cards">
            <div class="item-card">
                <div class="item-card-image">
                    <figure class="post-image">
                    <img src={`../../images/albums/${album.cover}.jpg`} alt={album.title} />
                    </figure>
                </div>
                <div class="item-card-details w-100">
                    <p class="item-card-details-album"> {album.title} </p>
                    <div class="d-flex justify-content-around w-100">
                        <p class="item-card-details-artist"><i class="bi bi-calendar2-month-fill me-1"></i> {album.year} </p>
                        <p class="item-card-details-artist"><i class="bi bi-currency-exchange me-1"></i> {album.price} LE </p>
                    </div>
                </div>
            </div>
        </div>
     </SwiperSlide>
      );
    });
  };

let Details = () => {
    let id=useParams().id;
    let [artist, setArtist] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:4000/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            // console.log(data);
            setArtist(data);
        })
        .catch((err)=>{console.log(err)});
    },[])

    return (
        <div id="container">
                <div class="product-details">
                    <h1 class="artist-name">{artist.name}</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <p class="information">{artist.bio}</p>
                    <NavLink class="text-decoration-none" to={"/music"}>
                        <button class="Btn">
                            <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                            <div class="text">Back</div>
                        </button>
                    </NavLink>
                </div>
                <div class="product-image">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {RenderAlbums(artist)}
                    </Swiper>
                </div>
           


            </div>
    )
}
export default Details;
// class Music extends Component {
//     constructor() {
//         super();
//         this.state = {
//             artist: []
//         }

//     }
//     componentDidMount() {
//         let id=useParams().id;
//         fetch(`http://localhost:4000/artists/${id}`)
//             .then((response) => { return response.json() })
//             .then((data) => {
//                 this.setState({ artist: data });
//             })
//             .catch((err) => { console.log(err) });
//     }
//     render() {
//         return (
           
//             // <div class="container-cards">
//             //     <div class="item-card">
//             //         <div class="item-card-image">
//             //             <figure class="post-image">
//             //                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg" />
//             //             </figure>
//             //         </div>
//             //         <div class="item-card-details w-100">
//             //             <p class="item-card-details-album"> SCORPION </p>
//             //             <div class="d-flex justify-content-around w-100">
//             //                 <p class="item-card-details-artist"><i class="bi bi-calendar2-month-fill me-1"></i> Drake </p>
//             //                 <p class="item-card-details-artist"><i class="bi bi-currency-exchange me-1"></i> 20 LE </p>
//             //             </div>
//             //         </div>
//             //     </div>
//             // </div>
//         );
//     }
// }
// export default Music;

