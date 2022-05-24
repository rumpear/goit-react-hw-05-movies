const IMAGE_PATH_POSTER = `https://image.tmdb.org/t/p/w500`;

export const checkPoster = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_PATH_POSTER + poster_path)
    : (poster_path =
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg');
};
