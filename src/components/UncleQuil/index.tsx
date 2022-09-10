import quil from '/quil.webp';

const UncleQuil = () => (
  <div class="flex justify-center mb-16 mx-auto md:w-2/4 md:mx-[5%]">
    <img
      class="animate-sway w-[12.5rem] h-[12.5rem] xxs:w-[15.625rem] xxs:h-[15.625rem] xs:w-auto xs:h-auto"
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
