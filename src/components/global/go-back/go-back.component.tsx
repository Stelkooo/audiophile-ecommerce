import { useRouter } from 'next/router';

export default function GoBack() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      <p className="mb-6 mt-4 opacity-50">Go Back</p>
    </button>
  );
}
