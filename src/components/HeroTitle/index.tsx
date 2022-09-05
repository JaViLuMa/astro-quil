import '@styles/heroTitle.css';
import supabaseData from '@utils/supabaseData';

import HeroImage from '../HeroImage';
import sparkLeft from '/sparkle-left.webp';
import sparkRight from '/sparkle-right.webp';

const data = await supabaseData<IHeroTitle>('HeroTitle', 'Title');

const HeroTitle = () => (
  <div class="flex justify-center items-center mb-16">
    <HeroImage src={sparkLeft} title="Left Spark" />
    <h1 class="hero-title__text">{data.Title}</h1>
    <HeroImage src={sparkRight} title="Right Spark" />
  </div>
);

export default HeroTitle;
