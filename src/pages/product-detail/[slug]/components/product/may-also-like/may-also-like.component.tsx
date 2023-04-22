import MayAlsoLikeItem from './components/may-also-like-item/may-also-like-item.component';

export default function MayAlsoLike() {
  return (
    <div>
      <h2 className="heading-smaller mb-10 text-center">You May Also Like</h2>
      <div className="flex flex-col gap-14">
        <MayAlsoLikeItem />
        <MayAlsoLikeItem />
        <MayAlsoLikeItem />
      </div>
    </div>
  );
}
