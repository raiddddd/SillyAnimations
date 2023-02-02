const circle = document.querySelector('.circle');

circle.addEventListener('click', (e) => {
  e.preventDefault();
  circle.style.animation="crazy-moving-circle 5s ease-out";
  const interval = setTimeout( () => {
    circle.style.removeProperty("animation");
  }, 5000);
});


const followSquare = document.querySelector('.pointer-follow');
const parentForFollowing = document.querySelector('.pointer-parent');
const coordonates = {
  width: 500,
  height: 500
};

parentForFollowing.addEventListener('mousemove', (e) => {
  e.preventDefault();
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  const X=e.offsetX-15;
  const Y=e.offsetY-15;
  // if(X>0) {
    // }
    // followSquare.style.marginLeft=`${X}px`;
    // followSquare.style.marginTop=`${Y}px`;
    // followSquare.style.marginRight="auto";
    // followSquare.style.marginBottom="auto";
    // followSquare.style.top=`${Y}px`;
    // followSquare.style.left=`${X}px`;
  followSquare.style.transform=`translate(${X}px,${Y}px)`;
})


