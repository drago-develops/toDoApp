//deleteState.js

let pendingProjectDeleteId = null;

const setPendingProjectDeleteId = (id) => {
    pendingProjectDeleteId = id;
};

const getPendingProjectDeleteId = () => {
    return pendingProjectDeleteId;
};

const clearPendingProjectDeleteId = () => {
    pendingProjectDeleteId = null;
};

export {
    setPendingProjectDeleteId,
    getPendingProjectDeleteId,
    clearPendingProjectDeleteId
};
