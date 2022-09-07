/// <reference types="astro/client" />

type HeroImageProps = {
  title: string;
  src: string;
};

interface IHeroTitle {
  Title: string;
}

type SocialMediaIconProps = {
  title: string;
  alt: string;
  src: string;
  href: string;
};

interface ISocialMedias {
  ShowSocialMedia: boolean;
  Title: string;
  Alt: string;
  Source: string;
  Link: string;
}

type Container = {
  children: import('solid-js').JSXElement;
  maxWidth?: string;
  margin?: string;
  width?: string;
  changeDirection?: boolean;
};

type ContainerProps = Container &
  (
    | {
        changeDirection: boolean;
        flexDirection: `${'sm' | 'md' | 'lg' | 'xl' | '2xl'}:${string}`;
      }
    | {
        changeDirection?: false;
        flexDirection?: 'flex-row' | 'flex-col';
      }
  );

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
