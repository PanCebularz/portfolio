const currentYear = () => {
  const copyrights = document.getElementById('copyrights');
  copyrights.innerHTML = `&copy; ${new Date().getFullYear()} olivierzagorski.com`;
};
export default currentYear();
