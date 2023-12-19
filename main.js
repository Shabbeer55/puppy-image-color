
let puppyImage = document.getElementById("puppyImage");
let iconColor = document.getElementById("likeIcon");
let likeButtonBgColor = document.getElementById("likeButton");
let isImageLikded = false;



function onClickLikeButton(){
    if (isImageLikded === false) {
    puppyImage.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    iconColor.style.color ="#0967d2";
     likeButtonBgColor.style.backgroundColor ="#0967d2";
      likeButtonBgColor.style.color ="#ffffff";
     isImageLikded = true;
    }
    else {
        puppyImage.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        iconColor.style.color ="#cbd2d9";
        likeButtonBgColor.style.backgroundColor ="#cbd2d9";
          likeButtonBgColor.style.color ="#9aa5b1";
        isImageLikded = false;
    }
}

