const HeroImage = (props: HeroImageProps) => (
  <img
    class="hero-title__image"
    src={props.src}
    title={props.title}
    alt=""
    width={80}
    height={80}
    loading="eager"
  />
);

export default HeroImage;
