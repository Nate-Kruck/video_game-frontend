import request from 'superagent';

const URL = `https://lab-08-backend.herokuapp.com`;

export function fetchGames() {
    return request.get(`${URL}/games`);
}

export function fetchGame(id) {
    return request.get(`${URL}/detail/${id}`);
}

export function createGame(gameData) {
    return request.post(`${URL}/games`, gameData)
}

export function deleteGame(id) {
    return request.delete(`${URL}/detail/${id}`);
}

export function updateGameList(id, updatedGameList) {
    return request.put(`${URL}/games/${id}`, updatedGameList);
}