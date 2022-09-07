const HeroImage = (props: HeroImageProps) => (
  <img
    class="mt-2 w-8 h-8 xxs:w-10 xxs:h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
    src={props.src}
    title={props.title}
    alt=""
    width={80}
    height={80}
    loading="eager"
  />
);

export default HeroImage;
