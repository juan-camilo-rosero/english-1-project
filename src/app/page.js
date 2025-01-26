import Header from '@/components/header/Header'
import Articles from '@/components/main/Articles'

export default function Home() {
  return (
    <div className='bg-primary pb-12 md:pb-0'>
      <Header/>
      <Articles/>
    </div>
  );
}
