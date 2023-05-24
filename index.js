"use strict";
function handleSearchResults(results) {
  const searchResultsContainer = document.querySelector('.gcse-searchresults');

  searchResultsContainer.innerHTML = '';

  results.forEach((result) => {
    const videoUrl = result.link;
    const videoTitle = result.htmlTitle;
    const videoDescription = result.htmlSnippet;

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    const videoLink = document.createElement('a');
    videoLink.href = videoUrl;
    videoLink.target = '_blank';

    const videoTitleElement = document.createElement('h3');
    videoTitleElement.innerHTML = videoTitle;

    const videoDescriptionElement = document.createElement('p');
    videoDescriptionElement.innerHTML = videoDescription;

    videoLink.appendChild(videoTitleElement);
    videoLink.appendChild(videoDescriptionElement);
    videoContainer.appendChild(videoLink);

    searchResultsContainer.appendChild(videoContainer);
  });
}

function performSearch(query) {
  const searchInput = document.querySelector('.gsc-input');
  searchInput.value = query; 

  const searchButton = document.querySelector('.gsc-search-button');
  searchButton.click(); 
}

const searchForm = document.querySelector('.gsc-search-box');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const query = document.querySelector('.gsc-input').value;
  performSearch(query);
});

document.addEventListener('DOMContentLoaded', loadCSE);
