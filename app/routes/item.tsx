import type { IItemProps } from "~/routes/home";

export function ItemDisplay({ name, link, photo }: IItemProps) {
  return (
      <a
          href={link}
          className="block rounded-md border border-gray-300 p-4 shadow-sm
                 dark:border-gray-700 dark:bg-gray-800 sm:p-6
                 transition-colors duration-200 ease-in-out
                 hover:border-blue-500 dark:hover:border-blue-400"
      >
        <div className="flex justify-between sm:gap-4 lg:gap-6">
          <div className="order-last">
            <img
                alt={name}
                src={photo}
                className="size-16 rounded-full object-cover sm:size-[72px]"
            />
          </div>

          <div className="mt-4 sm:mt-0">
            <h3
                className="text-lg font-medium text-pretty text-gray-900
                       dark:text-gray-100"
            >
              {name}
            </h3>
          </div>
        </div>
      </a>
  );
}

export function Item(props: { list: IItemProps[] }) {
  return (
      <div className="container mx-auto py-12 px-6 sm:px-12 lg:px-128 md-px-24">
        <div className="space-y-6">
          {props.list.map((item, index) => (
              <ItemDisplay key={index} {...item} />
          ))}
        </div>
      </div>
  );
}