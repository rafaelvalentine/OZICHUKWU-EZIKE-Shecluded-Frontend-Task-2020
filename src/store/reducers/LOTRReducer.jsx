const initialState = {
  data:[
    {
      "_id": "5cd99d4bde30eff6ebccfd9a",
      "height": "",
      "race": "Human",
      "gender": "Male",
      "birth": "Late ,First Age",
      "spouse": "",
      "death": "Late First Age",
      "realm": "",
      "hair": "",
      "name": "Manthor",
      "wikiUrl": "http://lotr.wikia.com//wiki/Manthor"
  }
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOTR_DATA':
    return { ...state, ...payload }

  default:
    return state
  }
}
