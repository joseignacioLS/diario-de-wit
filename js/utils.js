export const sortSessions = (sessions, desc = true) => {
    return structuredClone(sessions)
        .sort((a, b) => (desc ? -1 : 1) * (b.session - a.session))
        .sort((a, b) => (desc ? -1 : 1) * (b.arc - a.arc))
}