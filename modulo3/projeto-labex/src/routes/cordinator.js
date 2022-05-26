export const navigateToHome = (navigate) => {
    navigate("/")
}

export const navigateToAdmin = (navigate) => {
    navigate("/admin")
}

export const navigateToTripDetails = (navigate,tripId) => {
    navigate(`/admin/${tripId}/details`)
}