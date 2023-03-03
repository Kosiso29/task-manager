import * as actionTypes from "./actionTypes";

export const createUserLocalStorage = (user) => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    localStorageTaskItems.push({
        user,
        tasksBefore: [],
        tasksToday: [],
        questions: []
    });
    localStorage.setItem('taskItems', JSON.stringify(localStorageTaskItems));
    return {
        type: actionTypes.CREATE_USER,
        user
    }
}

export const getUsersLocalStorage = () => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    const users = localStorageTaskItems.reduce((accumulatedTaskItems, taskItem) => {
        accumulatedTaskItems.push(taskItem.user);
        return accumulatedTaskItems;
    }, [])
    localStorage.setItem('taskItems', JSON.stringify(localStorageTaskItems));
    return {
        type: actionTypes.GET_USERS,
        users
    }
}

export const setUserLocalStorage = (user) => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    const reducerTaskItems = {
        user,
        tasksBefore: [],
        tasksToday: [],
        questions: []
    };
    const userCategoryIndex = localStorageTaskItems.findIndex(userCategory => userCategory.user === user);
    localStorageTaskItems[userCategoryIndex].tasksBefore.forEach(task => {
        reducerTaskItems.tasksBefore.push({ task , editTask: task, checked: false, isEditClicked: false });
    })
    localStorageTaskItems[userCategoryIndex].tasksToday.forEach(task => {
        reducerTaskItems.tasksToday.push({ task , editTask: task, checked: false, isEditClicked: false });
    })
    localStorageTaskItems[userCategoryIndex].questions.forEach(task => {
        reducerTaskItems.questions.push({ task , editTask: task, checked: false, isEditClicked: false });
    })
    return {
        type: actionTypes.SET_USER,
        ...reducerTaskItems
    }
}

export const deleteUserLocalStorage = (user) => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    const users = [];
    const newLocalStorageTaskItems = localStorageTaskItems?.reduce((accumulatedTaskItems, taskItem) => {
        if (taskItem.user !== user) {
            accumulatedTaskItems.push(taskItem);
            users.push(taskItem.user);
        }
        return accumulatedTaskItems;
    }, []);
    localStorage.setItem('taskItems', JSON.stringify(newLocalStorageTaskItems));
    return {
        type: actionTypes.DELETE_USER,
        users
    }
}

export const createTaskLocalStorage = (user, taskType, taskItems) => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    const userCategoryIndex = localStorageTaskItems.findIndex(userCategory => userCategory.user === user);
    const tasks = [];
    taskItems?.forEach(taskItem => {
        tasks.push(taskItem.task);
        localStorageTaskItems[userCategoryIndex][taskType] = tasks;
    })
    if (taskItems.length <= 0) {
        localStorageTaskItems[userCategoryIndex][taskType] = [];
    }
    localStorage.setItem('taskItems', JSON.stringify(localStorageTaskItems));
    return {
        type: actionTypes.CREATE_TASK,
        [taskType]: localStorageTaskItems?.[userCategoryIndex]?.[taskType] || [],
        taskType
    }
}

export const getTaskLocalStorage = (user, taskType) => {
    const localStorageTaskItems = JSON.parse(localStorage.getItem('taskItems'));
    const task = localStorageTaskItems.filter(userCategory => userCategory.user === user)?.reduce((accumulatedTaskItems, taskItem) => {
        taskItem[taskType].forEach(task => {
            accumulatedTaskItems.push({ task , editTask: task, checked: false, isEditClicked: false });
        })
        return accumulatedTaskItems;
    }, []);
    return {
        type: actionTypes.GET_TASK,
        [taskType]: task,
        taskType
    }
}