const SocialMediaIcon = (props: SocialMediaIconProps) => (
  <a target="_blank" href={props.href} rel="noopener noreferrer">
    <img
      src={`${import.meta.env.PUBLIC_STRAPI_URL}${props.src}`}
      title={props.title || ''}
      alt={props.alt || ''}
      width={48}
      height={48}
      loading="eager"
    />
  </a>
);

export default SocialMediaIcon;
