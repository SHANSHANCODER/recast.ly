import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// Another helper function?

var searchYouTube = (query, callback) => {
  // TODO
  let endpoint = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  $.ajax({
    url: endpoint,
    method: 'GET',
    data: {
      q: query,
    },
    contentType: 'application/json',
    success: (response) => {
      console.log(response);
      callback(response);
    },
    error: (err)=>{ console.log('error with ajax GET thing', err); }
  });
};

export default searchYouTube;
