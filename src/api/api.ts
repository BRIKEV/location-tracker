import axios from 'axios';
import { NewTripRequest, EndTripRequest, NewTripResponse } from './APImodel';

const newTrip = async (payload: NewTripRequest): Promise<NewTripResponse> => {
  const { data } = await axios.post<NewTripResponse>('/api/v1/trips', payload);
  return data;
};

const endTrip = async (id: string, payload: EndTripRequest) => (
  axios.post(`/api/v1/trips/${id}/end`, payload)
);

export {
  newTrip,
  endTrip,
};
