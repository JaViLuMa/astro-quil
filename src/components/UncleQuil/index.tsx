import '@styles/uncleQuil.css';

import quil from '/quil.webp';

const UncleQuil = () => (
  <div class="flex w-2/4 justify-center mb-16 mx-auto md:mx-[5%]">
    <img
      class="animate-sway"
      src={quil}
      title="Uncle Quil"
      alt="Biggest cutie in this world!"
      width={300}
      height={300}
      loading="eager"
    />
  </div>
);

export default UncleQuil;
