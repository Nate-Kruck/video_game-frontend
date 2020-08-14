import request from 'superagent';

export function fetchGames() {
    return request.get(`https://lab-08-backend.herokuapp.com/games`);
}

export function fetchGame(id) {
    return request.get(`https://lab-08-backend.herokuapp.com/games/${id}`);
}

export function createGame(gameData) {
    return request.post(`https://lab-08-backend.herokuapp.com/games`, gameData)
}