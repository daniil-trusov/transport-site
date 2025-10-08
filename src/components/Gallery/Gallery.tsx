import { GALLERY_IMAGES } from '@/constants';

export const Gallery = () => {
  return (
    <section className="space-y-3">
      {GALLERY_IMAGES.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Stripe gallery image № ${index + 1}`}
          className="w-full max-w-[752px] h-auto max-h-60 object-contain"
        />
      ))}
    </section>
  );
};
