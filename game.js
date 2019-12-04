	/* Array containing the image slices */
    var images=['1_1','1_2','1_3','1_4','2_1','2_2','2_3','2_4','3_1','3_2','3_3','3_4','4_1','4_2','4_3','4_4'];
    var shuffledImages=[];
    var isStarted;
		console.log(shuffledImages);
		/* div that contains all images */
		var container=document.getElementById('pieces-container');
		
		drawPuzzle(images);
		
		var startGameButton=document.getElementById('btn-start');
		startGameButton.addEventListener('click',function(event){
			console.log('start game');
      shuffledImages=[];
      for(i=0;i<images.length;i++) shuffledImages[i]=images[i];
			shuffle(shuffledImages);
			console.log(images);
      shuffledImages[0]='blank';
      shuffle(shuffledImages)
      drawPuzzle(shuffledImages);
      isStarted=true;
		});
		
		function drawPuzzle(imageSet){
			container.innerHTML='';
			/* Create the images and put them in the div */
    var row=1;
    var column=0;
      for(i=0;i<imageSet.length;i++){
        column++;
        if (column==5){
          row++;
          column=1;
        }
				container.innerHTML+='<div class="col-3" style="max-width:187px"><img id="'+row+'_'+column+'" data-row="'+row+'" data-column="'+column+'" class="" src="set1/'+imageSet[i]+'.png" /></div>';
			}
    }
container.addEventListener('click',function(event){
  if(isStarted==false || event.target.getAttribute('data-row')==null) return;
  row=parseInt(event.target.getAttribute('data-row'));
  column=parseInt(event.target.getAttribute('data-column'));
  checkAbove(row-1,column);
  checkBelow(row+1,column);
  checkLeft(row,column-1);
  checkRight(row,column+1);
  

 
    console.log(event.target.src);

  });
  function checkAbove(row,column){
    if(row==0 || isNaN(row)) return;
    console.log(document.getElementById(row+'_'+column).src);
    if(document.getElementById(row+'_'+column).src.includes('blank.png')){
      var temp=document.getElementById((row+1)+'_'+column).src;
      document.getElementById((row+1)+'_'+column).src=document.getElementById(row+'_'+column).src;
      document.getElementById(row+'_'+column).src=temp;
    }
    
  }
  function checkBelow(row,column){
    if(row==5 || isNaN(row)) return;
    console.log(document.getElementById(row+'_'+column).src);
    if(document.getElementById(row+'_'+column).src.includes('blank.png')){
      var temp=document.getElementById((row-1)+'_'+column).src;
      document.getElementById((row-1)+'_'+column).src=document.getElementById(row+'_'+column).src;
      document.getElementById(row+'_'+column).src=temp;
    }
  }
  function checkLeft(row,column){
    if(column==0 || isNaN(row)) return;
    console.log(document.getElementById(row+'_'+column).src);
    if(document.getElementById(row+'_'+column).src.includes('blank.png')){
      var temp=document.getElementById(row+'_'+(column+1)).src;
      document.getElementById(row+'_'+(column+1)).src=document.getElementById(row+'_'+column).src;
      document.getElementById(row+'_'+column).src=temp;
    }
  }
  function checkRight(row,column){
    if(column==5 || isNaN(row)) return;
    console.log(document.getElementById(row+'_'+column).src);
    if(document.getElementById(row+'_'+column).src.includes('blank.png')){
      var temp=document.getElementById(row+'_'+(column-1)).src;
      document.getElementById(row+'_'+(column-1)).src=document.getElementById(row+'_'+column).src;
      document.getElementById(row+'_'+column).src=temp;
    }
  }
  function checkVictory(){
    var row=1
    var column=0;
    for(i=0;i<images.length;i++){
      column++;
      if (column==5){
          row++;
          column=1;
        }
        
    }
  }
  