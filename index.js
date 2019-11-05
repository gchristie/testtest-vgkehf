// Import stylesheets
import './style.css';
import './photosphere.css';
import './photosphere.js';




// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>photosphere</h1>
<div id="photosphere"></div>

<SCRIPT>
 var PSV = new PhotoSphereViewer({
    panorama: "http://gogs.atwebpages.com/images/clancy.jpg",
    container: 'photosphere',
    caption: '',
    loading_img: "http://gogs.run/src/photosphere-logo.gif",
    navbar: 'autorotate zoom download caption fullscreen',
    default_fov: 70,
    default_lat: 0.3,
    mousewheel: false,
    touchmove_two_fingers: true,
    size: {width=640, height: 500
    }
  });
</SCRIPT>

`;