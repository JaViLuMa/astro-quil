import siteSections from '@constants/siteSections';
import trimExtraSpaces from '@utils/trimExtraSpaces';
import { For, Show } from 'solid-js';

const SiteSections = () => (
  <div
    class={trimExtraSpaces(`
      flex items-center flex-col justify-evenly
      border-solid border-2 border-police-blue rounded-3xl
      mb-8 pt-7
      shadow-site-sections
    `)}
  >
    <For each={siteSections}>
      {(section) => (
        <Show when={section.showSection} fallback={null}>
          <a
            class={trimExtraSpaces(`
              text-4xl duration-300 no-underline mb-7 text-azureish-white text-center
              hover:text-shadow-site-sections
              after:block after:border-solid after:border-b-2 after:border-b-peru
              after:scale-x-0 after:text-transform-site-sections
              hover:after:scale-x-100
            `)}
            href={section.slug}
          >
            {section.section}
          </a>
        </Show>
      )}
    </For>
  </div>
);

export default SiteSections;
