import '@styles/socialMedias.css';
import supabaseData from '@utils/supabaseData';
import { For, Show } from 'solid-js';

import SocialMediaIcon from '../SocialMediaIcon';

const data = await supabaseData<Array<ISocialMedias>>('SocialMedias', '*');

const SocialMedias = () => (
  <div class="social-medias__container">
    <For each={data} fallback={[]}>
      {(socialMedia) => (
        <Show when={socialMedia.ShowSocialMedia} fallback={null}>
          <SocialMediaIcon
            href={socialMedia.Link}
            src={socialMedia.Source}
            title={socialMedia.Title}
            alt={socialMedia.Alt}
          />
        </Show>
      )}
    </For>
  </div>
);

export default SocialMedias;
