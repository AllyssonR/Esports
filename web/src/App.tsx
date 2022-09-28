import './styles/main.css';
import logoImg from './assets/logo.svg';
import { GameBanner } from './Components/GameBanner';
import { CreateAdBanner } from './Components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { GameController } from 'phosphor-react';
import { Input } from './Components/Form/Input';
interface GamesProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}
export function App() {
  const [games, setGames] = useState<GamesProps[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  });
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
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anuncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o Game?
                </label>
                <Input
                  type="text"
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Como te chamam dentro do game"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual o seu discord?</label>
                  <Input type="text" id="discord" placeholder="Usuario#00000" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="grid  grid-cols-4 gap-2">
                    <button className="w-8 bg-zinc-900" title="domingo">
                      D
                    </button>
                    <button className="w-8 bg-zinc-900" title="segunda">
                      S
                    </button>
                    <button className="w-8 bg-zinc-900" title="terça">
                      T
                    </button>
                    <button className="w-8 bg-zinc-900" title="quarta">
                      Q
                    </button>
                    <button className="w-8 bg-zinc-900" title="quinta">
                      Q
                    </button>
                    <button className="w-8 bg-zinc-900" title="sexta">
                      S
                    </button>
                    <button className="w-8 bg-zinc-900" title="sabado">
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horario do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" id="" />
                Costumo me conectar ao chat de voz
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 "
                >
                  <GameController className="w-6 h-6" size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
