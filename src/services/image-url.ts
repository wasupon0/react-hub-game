import logo from "../logo.svg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return logo;
  const target = "media/";
  const index = url.lastIndexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
