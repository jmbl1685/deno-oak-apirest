import { IPlayer } from './IPlayer.ts';

import { v4 } from 'https://deno.land/std/uuid/mod.ts';

let players: IPlayer[] = [
  {
    id: v4.generate(),
    name: 'Lionel Messi',
    team: 'Barcelona FC',
    photo: 'https://s.hs-data.com/bilder/spieler/gross/26622.jpg'
  },
];

export async function createPlayer(player: IPlayer) {
  return new Promise<IPlayer>((resolve, reject) => {
    try {
      player.id = v4.generate();
      players.push(player);
      resolve(player);
    } catch (err) {
      reject(err);
    }
  })
}

export async function getPlayers() {
  return new Promise<IPlayer[]>((resolve, reject) => {
    try {
      const data = players;
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}

export async function getPlayerById(playerId: string) {
  return new Promise<IPlayer>((resolve, reject) => {
    try {
      const data = players?.filter(player => player.id === playerId)[0];
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}

export async function deletePlayer(playerId: string) {
  return new Promise<IPlayer>((resolve, reject) => {
    try {
      players = players?.filter(player => player.id !== playerId);
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}

export async function updatePlayer(playerId: string, playerNew: IPlayer) {
  return new Promise<IPlayer>((resolve, reject) => {
    try {
      players = players?.map(player => {
        if (player.id === playerId) {
          player = playerNew
          player.id = playerId;
        }
        return player;
      })
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}