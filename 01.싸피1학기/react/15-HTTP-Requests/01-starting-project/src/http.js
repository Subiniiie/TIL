export async function fetchAvailablePlaces() {
     // 사용 가능한 장소를 가져오는 요청
     const response = await fetch('http://localhost:3000/places')
     const resData = await response.json()

     if (!response.ok)  {//200, 300 -> true 400, 500 -> false
       throw new Error('Failed to fetch places')
     }

     return resData.places
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify(places),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const resData = await response.json()

    if (!response.ok) {
        throw new Error('Failed to update user data.')
    }

    return resData.message
}