document.addEventListener("DOMContentLoaded", function(event) {
  mobileNavToggle();
  initExerciseProgram();
  initProgramTable();
  subNavToggle();
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
  var tables = document.getElementsByTagName('table'),
      targets = [];
  
  for (var i = 0; i < tables.length; i++) {
    targets.push(tables[i].getElementsByTagName('a'));
  }
  
  return targets;
}

function bindOnClick ( tables ) {
  var imageTarget = document.getElementsByClassName('workout-image')[0];
  
  for (var i = 0; i < tables.length; i++) {
    var links = tables[i];
    
      for (var i2 = 0; i2 < links.length; i2++) {
  
        links[i2].addEventListener('click', function(e) {
          e.preventDefault();
          
          
          var data = {
            currentImageData : getImageInfo(imageTarget),
            targetData : getTargetInfo(this)
          };
          
          changeImage( imageTarget, data );
        });
      };
      
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

function programBindOnClick () {
  var programNav = document.getElementById('program-nav');
  var links = programNav.getElementsByTagName('a');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.hash.split('#')[1];
      var table = document.getElementById(target);
      
      programNav.getElementsByClassName('active')[0].classList.toggle('active');
      
      this.parentElement.classList.toggle('active');
      
      document.getElementsByClassName('exercises active')[0].classList.toggle('active');
      
      table.classList.toggle('active');
    });
  }
}

function initProgramTable () {
  programBindOnClick();
}

function subNavToggle() {
  var dropdownButtons = document.getElementsByClassName('dropdown');
  
  //console.log(dropdownButtons);
  
  for (var i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener('click', function(){
      console.log('oh hai');
      var menu = this.nextElementSibling;
      console.log(menu);
      menu.classList.toggle('open');
    });
  }
}