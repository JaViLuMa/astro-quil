import siteSections from '@constants/siteSections';
import '@styles/siteSections.css';
import { For, Show } from 'solid-js';

const SiteSections = () => (
  <div class="site-sections__container">
    <For each={siteSections}>
      {(section) => (
        <Show when={section.showSection} fallback={null}>
          <a class="site-sections__link" href={section.slug}>
            {section.section}
          </a>
        </Show>
      )}
    </For>
  </div>
);

export default SiteSections;
