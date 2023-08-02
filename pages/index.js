import source from '../public/source.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        src={source}
        height={200}
        width={500}
      />
    </>
  )
}
