export const sortSessions = (sessions) => {
    return structuredClone(sessions)
        .sort((a, b) => b.session - a.session)
        .sort((a, b) => b.arc - a.arc)
}