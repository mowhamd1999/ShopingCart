const shorten = (title) => {
    const SplitedTitle = title.split(' ');
    const newTitle = `${SplitedTitle[0]} ${SplitedTitle[1]}`
    return newTitle
}
const IsInCart = (state , id) => {
    const result = !!state.itemSelected.find(item => item.id === id)
    return result
}
const Quantity = (state,id)=> {
    const index = state.itemSelected.findIndex(item => item.id === id)
    if(index === -1){
        return false
    }else{
        return state.itemSelected[index].quantity
    }
}
export {shorten , IsInCart , Quantity}