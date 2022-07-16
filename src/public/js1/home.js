console.log("hello home")
const user1 = JSON.parse(window.localStorage.user)
console.log(user1)
header_username.textContent = user1.user_fullname
header_img.src = 'http://localhost:3000/' + user1.user_img
console.log(header_username, header_img)





async function renderMovies(){
    const movies = await request("http://localhost:3000/api/movies", "GET")
    console.log(movies.data)
    for(let i of movies.data){
        `<div class="progression-studios-slider-caption-align">
            <h2><a href="video-post.html">${movie_name}</a></h2>
            <ul class="slider-video-post-meta-list">
                <li class="slider-video-post-meta-cat"><ul><li><a href="#!">${movie_category}</a></li></ul></li>																				
                <li class="slider-video-post-meta-reviews">
                    <div class="average-rating-video-post">
                        <div class="average-rating-video-empty">
                            <span class="dashicons dashicons-star-empty"></span><span class="dashicons dashicons-star-empty"></span><span class="dashicons dashicons-star-empty"></span><span class="dashicons dashicons-star-empty"></span><span class="dashicons dashicons-star-empty"></span>
                        </div>
                        <div class="average-rating-overflow-width" style="width:80%;">
                            <div class="average-rating-video-filled">
                                <span class="dashicons dashicons-star-filled"></span><span class="dashicons dashicons-star-filled"></span><span class="dashicons dashicons-star-filled"></span><span class="dashicons dashicons-star-filled"></span><span class="dashicons dashicons-star-filled"></span>
                                <div class="clearfix"></div>
                            </div><!-- close .average-rating-video-filled -->
                        </div><!-- close .average-rating-overflow-width -->
                    </div><!-- close .average-rating-video-post -->
                    <div class="clearfix"></div>
                </li>
                <li class="slider-video-post-meta-year">${movies.release_date}</li>
                <li class="slider-video-post-meta-rating"><span>PG-13</span></li>
            </ul>
            <div class="clearfix"></div>
            <div class="progression-studios-slider-excerpt">Mae Holland seizes the opportunity of a lifetime when she lands a job with the world’s most powerful technology and social media company.</div>
            <a class="btn btn-slider-pro afterglow" href="#VideoLightbox-1"><i class="fas fa-play-circle"></i>Watch Now</a>
            
            <video id="VideoLightbox-1" poster="http://via.placeholder.com/960x540" width="960" height="540" class="afterglow-lightboxplayer" data-autoresize="fit">
                <source src="http://localhost:3000/${ movies.movie_full }" type="video/mp4">
            </video>
            
        </div>`
    }
}


renderMovies()