export function setViewportSize(viewportWidth){
    let payload = {width: viewportWidth, mobile: false}
    if(viewportWidth < 3) {
        payload = {width: viewportWidth, mobile: true}
    }
    return {
        type: 'VIEWPORT/SET_WIDTH',
        payload
    }
}