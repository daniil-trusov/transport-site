import { BREADCRUMBS } from '@/constants';

export const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="font-[rubik] text-[#7C8493]">
      <ol className="flex flex-wrap items-center gap-1">
        {BREADCRUMBS.map(({ name, url }, index) => (
          <li key={name} className="flex items-center gap-1">
            {index > 0 && <span className="text-[#7C8493]">/</span>}

            {index < BREADCRUMBS.length - 1 ? (
              <a href={url} className="hover:text-gray-600 transition-colors duration-150">
                {name}
              </a>
            ) : (
              <span className="text-[#25324B]">{name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
