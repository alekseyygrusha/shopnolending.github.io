var size = 20,
    newsContent= $('.news-content'),
    newsText = newsContent.text();
    
if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}




