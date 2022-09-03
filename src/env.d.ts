/// <reference types="astro/client" />

interface IHeroTitle {
  data: {
    id: number;
    attributes: {
      Title: string;
      locale: string;
    };
  };
  meta: {};
}

type SocialMediaIconProps = {
  title: string;
  alt: string;
  src: string;
  href: string;
};

interface ISocialMedia {
  id: number;
  attributes: {
    Title: string;
    Link: string;
    Alt: string;
    ShowSocialMedia: boolean;
    SocialMediaLogo: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          url: string;
        };
      };
    };
  };
}

interface ISocialMedias {
  data: [ISocialMedia];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
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
