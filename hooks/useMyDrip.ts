import {
  MY_BEANS_LIST_STORAGE_KEY,
  MY_DRIP_STORAGE_KEY,
} from "@/constants/StorageKeys";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

export default function useMyDrip() {
  const { getItem: getMyDrip, setItem: setMyDrip } =
    useAsyncStorage(MY_DRIP_STORAGE_KEY);

  const { getItem: getMyBeans, setItem: setMyBeans } = useAsyncStorage(
    MY_BEANS_LIST_STORAGE_KEY
  );

  return {
    getMyDrip,
    setMyDrip,
    getMyBeans,
    setMyBeans,
  };
}
