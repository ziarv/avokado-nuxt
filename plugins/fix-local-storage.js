import {APP_VERSION_SIMPLE} from '@/constants';

if (process.client) {
  const localVersion = localStorage.getItem('APP_VERSION_SIMPLE');
  if (!localVersion) {
    localStorage.clear();
    localStorage.setItem('APP_VERSION_SIMPLE', parseInt(APP_VERSION_SIMPLE))
  } else {
    const localVersionInt = parseInt(localVersion);
    const currentVersionInt = parseInt(APP_VERSION_SIMPLE);
    if (localVersionInt !== currentVersionInt) {
      localStorage.clear();
      localStorage.setItem('APP_VERSION_SIMPLE', parseInt(APP_VERSION_SIMPLE))
    }
  }
}
