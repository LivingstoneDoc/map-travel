import { uiElements } from "./ui-components.js";
import { data } from "./data.js";

export const playersInfoComponent = () => {
    const checkUsersList = () => {
        const isDataEmpty = data.rating.length === 0;
        if (isDataEmpty) {
          uiElements.playersTable.innerHTML = '';
          uiElements.playersTable.textContent = 'Список пуст';
          uiElements.playersTable.classList.add('empty-list-text');
        }
        return isDataEmpty;
    };
      
    const getFriendsPlayers = () => {
    const friendsIds = new Set(data.friends.map(element => element.id));
    const friendsPlayers = data.rating.filter(element => friendsIds.has(element.id));
    return friendsPlayers;
    }
    
    const getPlayersInfo = () => {
    try {
        checkUsersList();
        const friendsPlayers = getFriendsPlayers();
        uiElements.playersList.innerHTML = '';
        const tableRowsFragment = document.createDocumentFragment();
        for (let player of data.rating) {
        const playerInfo = document.createElement('tr');
        const playerPlace = document.createElement('td');
        playerPlace.textContent = '1';
        const playerAvatar = document.createElement('td');
        playerAvatar.textContent = player.img;
        const playerName = document.createElement('td');
        playerName.textContent = `${player.name} ${player.lastName}`;
        const playerSkill = document.createElement('td');
        playerSkill.textContent = player.points;
        playerInfo.append(playerPlace);
        playerInfo.append(playerAvatar);
        playerInfo.append(playerName);
        playerInfo.append(playerSkill);
        if (friendsPlayers.some(friendPlayer => friendPlayer.id === player.id)) {
            playerInfo.classList.add('player-friend');
        }
        tableRowsFragment.append(playerInfo);
        }
        uiElements.playersList.append(tableRowsFragment);
    } catch(err) {
        console.error(err);
    }
    };
    getPlayersInfo();
}