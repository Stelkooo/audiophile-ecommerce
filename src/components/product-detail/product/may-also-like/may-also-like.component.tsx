import { IOther } from '@/types';

import MayAlsoLikeItem from './components/may-also-like-item/may-also-like-item.component';

type Props = {
  others: IOther[];
};

export default function MayAlsoLike({ others }: Props) {
  return (
    <div>
      <h2 className="heading-smaller md:heading-large mb-10 text-center">
        You May Also Like
      </h2>
      <div className="flex flex-col gap-14 md:flex-row md:gap-3">
        {others &&
          others.map((other) => (
            <MayAlsoLikeItem other={other} key={other._id} />
          ))}
      </div>
    </div>
  );
}
