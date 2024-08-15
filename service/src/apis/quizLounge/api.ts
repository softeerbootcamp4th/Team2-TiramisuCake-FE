import { HEADERS } from '@/constants/lib/constants';

const baseURL = `${import.meta.env.VITE_SITE_URL}`;
const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTUsInJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzIzNzE3NzYwLCJleHAiOjE3MjM5NzY5NjB9.vLSjKJfUdB1XDdPNoJtRADRNlsIbTFZ0Leh-_r0oDBs5j7IokWaOyW0mO_KO7wYCfsLb5hD6ydKskomP135olw';
//`eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTUsInJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzIzNzE2OTE5LCJleHAiOjE3MjM5NzYxMTl9.A1-YhGffoeE3J2rzD-_o2WRLJTlVpACwDlsgTUqCqwUlm3KI-B78ImC6OuUT6MCHAVylgqJ_FB1mvShyMEqcSg`;
export const getFCFSEvent = async () => {
  const res = await fetch(`${baseURL}/fcfs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const getTutorialFCFSEvent = async () => {
  const res = await fetch(`${baseURL}/fcfs/tutorial`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
