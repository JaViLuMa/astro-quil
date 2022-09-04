import '@styles/heroTitle.css';
import fetchData from '@utils/fetchData';

import sparkLeft from '/sparkle-left.webp';
import sparkRight from '/sparkle-right.webp';

const heroTitle = await fetchData<IHeroTitle>('/api/hero-title');

const HeroTitle = () => {
  return (
    <div class="flex justify-center items-center mb-16">
      <img
        class="hero-title__image"
        src={sparkLeft}
        title="Left Spark"
        alt=""
        width={80}
        height={80}
        loading="eager"
      />
      <h1 class="hero-title__text">
        {heroTitle?.data?.attributes?.Title || "Uncle Quil's Infos"}
      </h1>
      <img
        class="hero-title__image"
        src={sparkRight}
        title="Right Spark"
        alt=""
        width={80}
        height={80}
        loading="eager"
      />
    </div>
  );
};

export default HeroTitle;
