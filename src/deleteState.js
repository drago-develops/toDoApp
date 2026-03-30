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

//delete state for editTask 
let pendingTaskDeleteId = null;

const setPendingTaskEditId = (id) => {
    pendingTaskDeleteId = id;
};

const getPendingTaskEditId = () => {
    return pendingTaskDeleteId;
};

const clearPendingTaskEditId = () => {
    pendingTaskDeleteId = null;
};

export {
    setPendingProjectDeleteId,
    getPendingProjectDeleteId,
    clearPendingProjectDeleteId,
    setPendingTaskEditId,
    getPendingTaskEditId,
    clearPendingTaskEditId
};
