// for global functions (HTML element inline events)
// UX functions
function loadSketchfab(wrapperID, sflink){
  var oldAnchor = document.querySelector(wrapperID + ' button');
  if (oldAnchor){
    oldAnchor.remove();
  }

  var sketchfab_container = document.querySelector(wrapperID);
  sketchfab_container.innerHTML = '<iframe width="80%" height="500px" title="PP截水溝" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/' + sflink + '/embed?camera=0"> </iframe>';

}

//打開modal時，同時帶入相對應的yt連結，modalID為將打開的modal ID, link為應帶入的yt影片ID
function openYTModal(modalID, link){
  $(modalID).modal('toggle');
  var oldIframe = document.querySelector(modalID + ' iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + link;
  iframe.allowFullscreen = true;
  iframe.classList.add('shadow');
  document.querySelector(modalID + ' .modal-yt-container').append(iframe);
  
}

//關閉modal時，同時關閉yt影片，parentID為modal ID, link為應關閉的yt影片ID，
function stopYT(parentID, link){
  $(parentID).modal('hide');
  var iframe = document.querySelector(parentID + ' iframe');
  if (iframe) {
    iframe.src = 'https://www.youtube.com/embed/' + link;
    iframe.allowFullscreen = true;
    iframe.classList.add('shadow');
  }
}