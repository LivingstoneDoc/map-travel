import { uiElements } from "./ui-components.js";

export const dialogComponent = () => {
    const openDialogWindow = (dialogWindow) => {
    dialogWindow.showModal();
    dialogWindow.classList.add('open');
    uiElements.body.classList.add('scroll-lock');
    }
    uiElements.ratingBtn.addEventListener('click', () => {
    openDialogWindow(dialogRating);
    });
    uiElements.chatBtn.addEventListener('click', () => {
    openDialogWindow(dialogChat);
    });
    uiElements.mailBtn.addEventListener('click', () => {
    openDialogWindow(dialogMail);
    });

    const closeDialogWindow = () => {
        uiElements.dialogRating.close();
        uiElements.dialogChat.close();
        uiElements.dialogMail.close();
    
    returnScroll();
    }
    for (let closeBtn of uiElements.dialogCloseBtn) {
    closeBtn.addEventListener('click', closeDialogWindow);
    }

    const returnScroll = () => {
    uiElements.body.classList.remove('scroll-lock');
    uiElements.dialogRating.classList.remove('open');
    uiElements.dialogChat.classList.remove('open');
    uiElements.dialogMail.classList.remove('open');
    }
    uiElements.dialogRating.addEventListener('close', returnScroll);

    const closeDialogOnBackDrop = (e) => {
    let dialogElement = e.currentTarget;
    if (e.target === e.currentTarget) {
        dialogElement.close();
        returnScroll();
    }
    }
    uiElements.dialogRating.addEventListener('click', closeDialogOnBackDrop);
    uiElements.dialogChat.addEventListener('click', closeDialogOnBackDrop);
    uiElements.dialogMail.addEventListener('click', closeDialogOnBackDrop);
}