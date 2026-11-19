export const sortSessions = (sessions, desc = true) => {
    return structuredClone(sessions)
        .sort((a, b) => (desc ? -1 : 1) * (b.session - a.session))
        .sort((a, b) => (desc ? -1 : 1) * (b.arc - a.arc))
}

export const generateImgSources = (name, resolutions, folder, format = "webp") => {
    const maxRes = Math.max(...resolutions)
    const result = [...resolutions.toSorted((a, b) => a - b), ""].map(res => {
        return {
            src: `${folder}${name}${res ? `-${res}` : ""}.${format}`,
            media: res ? `(width <= ${res}px)` : `(width > ${maxRes}px)`,
            default: res === ""
        }
    })
    return result
}