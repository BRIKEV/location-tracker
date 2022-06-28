export interface NewTripRequest {
  lat: number
  long: number
}

export interface NewTripResponse {
  id: string
}

export interface EndTripRequest extends NewTripRequest {
  price: number
}
