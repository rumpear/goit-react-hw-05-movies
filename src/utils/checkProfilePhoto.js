export const IMAGE_PATH_PROFILE = `https://image.tmdb.org/t/p/w185`;

export const checkProfilePhoto = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_PATH_PROFILE + poster_path)
    : (poster_path =
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg');
};
