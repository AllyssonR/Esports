import './styles/main.css';
import logoImg from './assets/logo.svg';
import { GameBanner } from './Components/GameBanner';
import { CreateAdBanner } from './Components/CreateAdBanner';
export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {' '}
          duo{' '}
        </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          key={1}
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
}
