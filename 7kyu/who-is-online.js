// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins),
// create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

const whosOnline = (friends) => {
    let result = {
        online: [],
        offline: [],
        away: [],
    };
    friends.forEach(friend => {
        if(friend['status'] === 'online' && friend['lastActivity'] <= 10) {
            result.online.push(friend.username);
        } else if (friend['status'] === 'online' && friend['lastActivity'] > 10) {
            result.away.push(friend.username);
        } else {
            result.offline.push(friend.username);
        }
    })
    result = Object.fromEntries(
                Object.entries(result)
                    .filter(([_, value]) => value.length > 0)
    );
    return result;
}

console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 4,
}])
);