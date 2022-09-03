import '@styles/socialMedias.css';
import fetchData from '@utils/fetchData';
import { For, Show } from 'solid-js';

import SocialMediaIcon from '../SocialMediaIcon';

const socialMedias = await fetchData<ISocialMedias>(
  '/api/social-medias?populate=*'
);

// TODO: Fix Render Bug
const SocialMedias = () => (
  <div class="social-medias__container">
    <For each={socialMedias?.data} fallback={[]}>
      {(socialMedia: ISocialMedia) => (
        <Show when={socialMedia?.attributes?.ShowSocialMedia} fallback={null}>
          <SocialMediaIcon
            href={socialMedia.attributes.Link}
            src={socialMedia.attributes.SocialMediaLogo.data.attributes.url}
            title={socialMedia.attributes.Title}
            alt={socialMedia.attributes.Alt}
          />
        </Show>
      )}
    </For>
  </div>
);

export default SocialMedias;
