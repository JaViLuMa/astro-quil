import '@styles/uncleQuil.css';

import quil from '/quil.webp';

const UncleQuil = () => (
  <div class="uncle-quil__container">
    <img
      class="uncle-quil__image"
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
