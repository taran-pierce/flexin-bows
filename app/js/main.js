document.addEventListener("DOMContentLoaded", function(event) {
  mobileNavToggle();
  initExerciseProgram();
});

function changeImage ( target, data ) {
  var image = target.getElementsByTagName('img')[0];
  var currentSrcPath = image.getAttribute('srcset');
  var imageName = data.targetData.target.imageName;
  var newSrcPath = splitPath(currentSrcPath, imageName);
  var sources = target.getElementsByTagName('source');
  
  image.srcset = newSrcPath + '.jpg';
  
  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    var media = source.getAttribute('media');
    
    if (media.includes('1200')) {
      var imageName = data.targetData.target.imageName + '-lg.jpg';
      var currentSrcset = source.getAttribute('srcset');
      var newSrcset = splitPath(currentSrcset, imageName);
      
      source.srcset = newSrcset;
    }
  
    if (media.includes('992')) {
      var imageName = data.targetData.target.imageName + '-md.jpg';
      var currentSrcset = source.getAttribute('srcset');
      var newSrcset = splitPath(currentSrcset, imageName);
  
      source.srcset = newSrcset;
    }
  }
}

function splitPath (path, imageNameTest) {
  var newPath;
  
  var pathArray = path.split('/');
  pathArray.pop();
  pathArray.push(imageNameTest);
  
  newPath = pathArray.join('/');
  
  return newPath;
}

function getTargets () {
  var table = document.getElementById('main-table'),
      targets = table.getElementsByTagName('a');
  
  return targets;
}

function bindOnClick ( targets ) {
  var imageTarget = document.getElementsByClassName('workout-image')[0];
  
  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];
    
    target.addEventListener('click', function() {
      var data = {
        currentImageData : getImageInfo(imageTarget),
        targetData : getTargetInfo(this)
      };
      
      changeImage( imageTarget, data );
    });
  }
}

function getImageInfo (picture) {
  var image = picture.getElementsByTagName('img')[0];
  var imageAlt = image.getAttribute('alt');
  var imageSrcset = image.getAttribute('srcset');
  var imageSources = picture.getElementsByTagName('source');
  var data = {};
  
  data['image'] = {
    alt : imageAlt,
    srcset : imageSrcset
  };
  
  for (var i = 0; i < imageSources.length; i++) {
    var imageSource = imageSources[i];
    
    data['source' + i] = {
      srcset : imageSource.getAttribute('srcset'),
      media : imageSource.getAttribute('media')
    };
  }

  return data;
}

function getTargetInfo(target) {
  var data = {};
  var imageName = target.getAttribute('data-exercise');
  
  data['target'] = {
    imageName : imageName
  };
  
  return data;
}

function initExerciseProgram () {
  var targets = getTargets();
  
  bindOnClick( targets );
}

function  mobileNavToggle () {
  var navButton = document.getElementById('main-nav-toggle');
  var navMenu = document.getElementById('main-nav');
  var windowWidth;
  
  navButton.addEventListener('click', function() {
    windowWidth = window.innerWidth;
    
    if ( windowWidth < 992) {
      navMenu.classList.toggle('open');
    }
  });
}