import {getFromAsyncStorage, Keys} from '@utils/asyncStorage';
import {useQuery} from '@tanstack/react-query';
import {useDispatch} from 'react-redux';
import {AudioData} from 'src/@types/audio';
import catchAsyncError from 'src/api/catchError';
import {getClient} from 'src/api/client';
import {upldateNotification} from 'src/store/notification';
import {Playlist} from 'src/@types/audio';

const fetchLatest = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const {data} = await client('/audio/latest');
  return data.audios;
};

export const useFetchLatestAudios = () => {
  const dispatch = useDispatch();
  return useQuery(['latest-uploads'], {
    queryFn: () => fetchLatest(),
    onError(err) {
      const errorMessage = catchAsyncError(err);
      dispatch(upldateNotification({message: errorMessage, type: 'error'}));
    },
  });
};

const fetchRecommended = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const {data} = await client('/profile/recommended');
  return data.audios;
};

export const useFetchRecommendedAudios = () => {
  const dispatch = useDispatch();
  return useQuery(['recommended'], {
    queryFn: () => fetchRecommended(),
    onError(err) {
      const errorMessage = catchAsyncError(err);
      dispatch(upldateNotification({message: errorMessage, type: 'error'}));
    },
  });
};

const fetchPlaylist = async (): Promise<Playlist[]> => {
  const client = await getClient();
  const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
  const {data} = await client('/playlist/by-profile', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data.playlist;
};

export const useFetchPlaylist = () => {
  const dispatch = useDispatch();
  return useQuery(['playlist'], {
    queryFn: () => fetchPlaylist(),
    onError(err) {
      const errorMessage = catchAsyncError(err);
      dispatch(upldateNotification({message: errorMessage, type: 'error'}));
    },
  });
};
