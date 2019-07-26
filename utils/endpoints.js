import axios from 'axios';
import { transformRidesDays } from './utils'

export async function loadUsersData() {
  const ENDPOINTS = {
    users: 'https://jsonplaceholder.typicode.com/users',
    riders_info: 'http://my-json-server.typicode.com/MRRaduan/vnt-sports/rider_info',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/photos'
  }

  return Promise.all([
    axios.get(ENDPOINTS.users),
    axios.get(ENDPOINTS.riders_info),
    axios.get(ENDPOINTS.posts),
    axios.get(ENDPOINTS.albums),
    axios.get(ENDPOINTS.photos)
  ]).then(values => setValues(values).then())
    .then(objs => formatData(objs))
}

const setValues = async values => {
  const users = await values[0].data;
  const riders_info = await values[1].data;
  const posts = await values[2].data;
  const albums = await values[3].data;
  const photos = await values[4].data;

  return { users, riders_info, posts, albums, photos }
}

const formatData = data => {
  return data.users.map(user => {
    const totalPosts = data.posts.filter(post => post.userId === user.id)
    const totalAlbums = data.albums.filter(album => album.userId === user.id)

    let totalPhotos = 0;
    totalAlbums.forEach(album => {
      totalPhotos += data.photos.filter(photo => photo.albumId === album.id)
        .length;
    });

    const userRide = (data.riders_info.filter(ride => ride.userId === user.id))[0].ride_in_group;

    let arrRideDays = (data.riders_info.filter(ride => ride.userId === user.id))[0].day_of_the_week;
    let rideDays = transformRidesDays(arrRideDays)
    console.log(rideDays)

    let userTable = {
      id: user.id,
      username: user.username,
      email: user.email,
      city: user.address.city,
      ride_in_group: userRide,
      // day_of_week: ,
      posts: totalPosts,
      albums: totalAlbums,
      photos: totalPhotos,
    }
  });
}

