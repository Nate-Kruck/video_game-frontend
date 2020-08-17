import request from 'superagent';

const URL = `http://localhost:7890`;

export function fetchGames() {
    return request.get(`${URL}/games`);
}

export function fetchGame(id) {
    return request.get(`${URL}/games/${id}`);
}

export function createGame(gameData) {
    return request.post(`${URL}/games`, gameData)
}

export function deleteGame(id) {
    return request.delete(`${URL}/games/${id}`);
}

export function updateGameList(id, updatedGameList) {
    return request.put(`${URL}/games/${id}`, updatedGameList);
}