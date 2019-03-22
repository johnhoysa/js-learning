// Found a few tutorials that suggested this code
if (matchMedia) {
  const mq = window.matchMedia('(min-width: 800px)');
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {
  // media query change
  if (mq.matches) {
    console.log('Desktop');
  } else {
    console.log('Mobile');
  }
}
