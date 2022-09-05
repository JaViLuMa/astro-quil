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
  maxWidth?: number;
  margin?: string | number;
  width?: number;
  changeDirection?: boolean;
};

type ContainerProps = Container &
  (
    | {
        changeDirection: boolean;
        breakpoint: number;
        flexDirection: 'row' | 'column';
      }
    | {
        changeDirection?: false;
        breakpoint?: never;
        flexDirection?: 'row' | 'column';
      }
  );

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
