export function ViewActivity(filter){
    return {
        type: 'VIEW/ACTIVITY',
        payload: {
            activity: {
                active: true,
                filter
            }
        }
    }
}
